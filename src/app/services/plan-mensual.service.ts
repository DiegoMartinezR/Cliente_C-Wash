import { Injectable } from '@angular/core';
import{HttpClient}  from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanMensualService {

  Api_URl ='http://52.87.209.249:5000/api/planMensual/'
  constructor(private  http:HttpClient) { }
  getPLanA(mes: string, anio: string){
     return this.http.get( this.Api_URl+mes+'/'+anio);
 
  }
}
