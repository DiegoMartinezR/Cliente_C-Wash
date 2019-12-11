import { Component, OnInit } from '@angular/core';
import {PlanDiarioService} from '../../services/plan-diario.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-plan-diario',
  templateUrl: './plan-diario.component.html',
  styleUrls: ['./plan-diario.component.css']
})
export class PlanDiarioComponent implements OnInit {
   mes = '';
   dia = '';
   anio = '';
   datos :any =[];
  constructor( private seleccion :PlanDiarioService) {}

  enviar(){
    this.seleccion.getPlan(this.dia,this.mes,this.anio).subscribe(result=>{
      this.datos = result;
    });
  }

  ngOnInit() {
  }

}
