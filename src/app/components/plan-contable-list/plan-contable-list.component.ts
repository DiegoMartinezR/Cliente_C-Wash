import { Component, OnInit } from '@angular/core';
import {PlanContableService}  from '../../services/plan-contable.service';

@Component({
  selector: 'app-plan-contable-list',
  templateUrl: './plan-contable-list.component.html',
  styleUrls: ['./plan-contable-list.component.css']
})

export class PlanContableListComponent implements OnInit {

  datosPlanContable: any =[];

  constructor(private planContableService :PlanContableService) {}
  
  filterPlanContable='';
  ngOnInit() {
    this.getPlanContables();
    
  }
  getPlanContables(){

    this.planContableService.getPlanContables().subscribe(
      res =>{
          this.datosPlanContable=res;
      },
      err => console.error(err)
      
      
  )
  }

  deleteDato(id_planContable :string ){

      console.log(id_planContable);
     
     
      
      
  }
  



}
