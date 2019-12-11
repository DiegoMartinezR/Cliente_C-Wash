import { Component, OnInit } from '@angular/core';
import{NivelService} from '../../services/nivel.service';
import { from } from 'rxjs';
import { Nivel } from 'src/app/models/Nivel';

@Component({
  selector: 'app-nivel',
  templateUrl: './nivel.component.html',
  styleUrls: ['./nivel.component.css']
})
export class NivelComponent implements OnInit {
  nivel='';
  padre_nivel ='';
  
  Nivel :any =[];

  constructor( private  nivelService:NivelService) {}
  enviar(){
    this.nivelService.getCatalogo(this.nivel,this.padre_nivel).subscribe(result =>{
        this.Nivel =result;
    });
  }
   filterNivel='';


  ngOnInit() {
    this.nivelService.getNivel().subscribe(
      res => {
          this.Nivel =res
      },
      err => console.error(err)
      
      
    );
    
  }

}
