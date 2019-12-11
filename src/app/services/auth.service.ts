import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Usuario} from '../models/Usuario';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 URL_API ='http://52.87.209.249:5000/api/usuario/';
 URL_API_POST='http://52.87.209.249:5000/api/usuario/auth/'

  constructor(private http:HttpClient) { }

  getLogin(usuario:string, contrasenia:string ){  
      return this.http.get(this.URL_API+usuario+'/'+contrasenia)
    
  }
  postLogin(usuario:string,contrasenia:string,postLogin:Usuario):Observable<Usuario>{
      return this.http.post(this.URL_API_POST+usuario+'/'+contrasenia,postLogin);
  }
}
