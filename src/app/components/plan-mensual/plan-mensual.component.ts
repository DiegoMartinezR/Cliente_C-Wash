import { Component, OnInit } from '@angular/core';
import {PlanMensualService} from '../../services/plan-mensual.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-plan-mensual',
  templateUrl: './plan-mensual.component.html',
  styleUrls: ['./plan-mensual.component.css']
})
export class PlanMensualComponent implements OnInit {
  mes = '';
  anio ='';
  dato :any=[];
  constructor( private selection :PlanMensualService) { }

  enviarMes(){
    this.selection.getPLanA(this.mes,this.anio).subscribe(result=>{
      this.dato = result;
    });
  }

  ngOnInit() {
  }

}
