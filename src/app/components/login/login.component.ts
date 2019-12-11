import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import{AuthService} from '../../services/auth.service';
import { from } from 'rxjs';
import { Alert } from 'selenium-webdriver';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  usuario ='';
  contrasenia='';

  perfil:any =[];

  constructor( private login:AuthService , private router:Router) {}
  loginUser(){
    this.login.getLogin(this.usuario,this.contrasenia).subscribe(
      result=>{
        
    if(result==null){
      
      this.router.navigate(['/login'])
      alert('usuario o contraseña incorrecta')
    } else{
     this.perfil=result;
      console.log(result);
      this.router.navigate(['/inicio']);
     
    }
    },
    err =>console.error(err)
    )
  }
   

  ngOnInit() {
  }



}
