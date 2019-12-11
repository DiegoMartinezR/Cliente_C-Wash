import { Injectable } from '@angular/core';
import{HttpClient}  from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PlanDiarioService {

  Api_URL ='http://52.87.209.249:5000/api/planDiario/'
  constructor(private  http:HttpClient) { }
  getPlan(dia: string, mes: string, anio: string){
    return this.http.get(this.Api_URL+dia+'/'+mes+'/'+anio);
  }
}
