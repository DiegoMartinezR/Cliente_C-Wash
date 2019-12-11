import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';

import{PlanContable}  from '../models/PlanContable';

import { from, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PlanContableService {

  constructor(private http: HttpClient) { }
//devuelve  todos el  plan contable
  getPlanContables(){
    return this.http.get('http://52.87.209.249:5000/api/planContable');
  }
//devuelve id ..de un plan contable

getDatoPlan(id_planContable:string){
    return this.http.get(`http://52.87.209.249:5000/api/planContable/${id_planContable}`);
}
//guardar  dato
saveDatoPlan(dato:PlanContable ){
return this.http.post(`http://52.87.209.249:5000/api/planContable`,dato);
}
//eliminar  dato
deleteDatoPlan(id_planContable:number, deleteDatoPlan:PlanContable):Observable<PlanContable>{
   return this.http.put(`http://52.87.209.249:5000/api/planContable/${id_planContable}`,deleteDatoPlan);
}
//actualisar
updateDatoPLan(id_planContable:number,updateDatoPLan :PlanContable):Observable<PlanContable>{
return this.http.put(`http://52.87.209.249:5000/api/planContable/${id_planContable}`,updateDatoPLan);

}
}
