import { Injectable } from '@angular/core';
import{HttpClient}  from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NivelService {

  API_URL ='http://52.87.209.249:5000/api/nivel'

  constructor( private http:HttpClient) { }

  getNivel(){
    return  this.http.get(`${this.API_URL}`);
  }
  getID( codigonivel : string){

    return  this.http.get(`${this.API_URL}/${codigonivel}`)
  }

  getCatalogo( nivel :string , padre_nivel :string){
    
    return   this.http.get(`${this.API_URL}/${nivel}/${padre_nivel}`)

  }
}
