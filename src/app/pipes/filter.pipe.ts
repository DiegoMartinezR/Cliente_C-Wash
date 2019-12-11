import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
   if(arg===''||arg.length<3) return value;
   const  resultadoNivel =[];
  
   for  (const niv of  value){
     if( niv.descripcion.toLowerCase().indexOf(arg.toLowerCase())>-1){
      resultadoNivel.push(niv);
      
     };
   };
  
   return  resultadoNivel;
 
  }

}