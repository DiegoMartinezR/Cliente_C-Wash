import { Injectable } from '@angular/core';
import{HttpClient}  from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanAnualService {
  
  Api_URL = 'http://52.87.209.249:5000/api/planAnual/'

  constructor(private http:HttpClient) { }
  getPlanAnios (anio: string){
     return  this.http.get( this.Api_URL+anio);
  }
}
