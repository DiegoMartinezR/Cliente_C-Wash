import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import{ActivatedRoute} from '@angular/router';

  import{PlanContableService}from '../../services/plan-contable.service';
  import {NivelService}from '../../services/nivel.service';


import { from } from 'rxjs';
  import { PlanContable } from 'src/app/models/PlanContable';

@Component({
   selector: 'app-plan-contable-from',
   templateUrl: './plan-contable-from.component.html',
   styleUrls: ['./plan-contable-from.component.css']
})
export class PlanContableFromComponent implements OnInit {

        datonew :PlanContable = {
             id_planContable:0,
              detalle:'',
              codigo:0,
              fecha:new Date(),
              deber:0,
              haber:0,
              estado:0,
  
};
  edit: boolean =false;
  
     constructor( private nivelServive2:NivelService ,private planContableService:PlanContableService, private router:Router ,private activeRoute:ActivatedRoute) {

   }
niveles :any =[];
   ngOnInit() {
     const params = this.activeRoute.snapshot.params;
    
     if(params.id_planContable){
       this.planContableService.getDatoPlan(params.id_planContable)
        .subscribe(
           res => {
             console.log(res);
             this.datonew=res;
             this.edit =true;
         },
         err =>console.error(err)
         
       )
     }
     

      this.nivelServive2.getNivel().subscribe(
         res =>{
          this.niveles = res
 },
            err => console.error(err)
 
    );
  }
       saveDato(){
             this.planContableService.saveDatoPlan(this.datonew).subscribe(
                 res =>{
                      console.log(res);
                       this.router.navigate(['/planContable']);
    
    },
       err => console.error(err)
    
  )
          
  }

  updateplanContable(){
   
  }


}
