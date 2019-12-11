import { Component, OnInit } from '@angular/core';
import {PlanAnualService}  from '../../services/plan-anual.service';
  import { from } from 'rxjs';

@Component({
  selector: 'app-plan-anual',
  templateUrl: './plan-anual.component.html',
  styleUrls: ['./plan-anual.component.css']
})
export class PlanAnualComponent implements OnInit {
  anio= '';
   datoanio: any=[]
  constructor( private  selecionAnio :PlanAnualService) { }
  enviarAnio(){
   this.selecionAnio.getPlanAnios(this.anio).subscribe(result =>{
     this.datoanio=  result;
   })
  }

  ngOnInit() {
  }

}
