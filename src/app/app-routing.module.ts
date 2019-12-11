import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{PlanContable} from './models/PlanContable';
import {PlanContableListComponent}from './components/plan-contable-list/plan-contable-list.component';
import {PlanContableFromComponent}  from './components/plan-contable-from/plan-contable-from.component';
import{InicioComponent}  from './components/inicio/inicio.component';
import{NivelComponent}from './components/nivel/nivel.component';
import{UsuarioComponent}  from './components/usuario/usuario.component';

import{PlanAnualComponent}from './components/plan-anual/plan-anual.component';
import{PlanMensualComponent}from './components/plan-mensual/plan-mensual.component';
import{PlanDiarioComponent}from './components/plan-diario/plan-diario.component';
import{LoginComponent}  from './components/login/login.component';
import{EstadisticasComponent} from './components/estadisticas/estadisticas.component';
import {LoginOffComponent} from './components/login-off/login-off.component';
import{CatalogoComponent}  from './components/catalogo/catalogo.component';
import { from } from 'rxjs';
import { RegistroComponent } from './components/registro/registro.component';
const routes: Routes = [
  {
    path:'',
    redirectTo:'/inicio',
    pathMatch:'full'
  },
  //metodo del parte  de  lista de plan  contable
  {
    path:'planContable',
    component:PlanContableListComponent
  },
  //metodo del agregar nuevo dato al plan contabel
  { 
    path: 'planContable/add',
    component :PlanContableFromComponent
  },
//metood  para editar
  {
    path :'planContable/edit/:id_planContable',
    component :PlanContableFromComponent
  }
  ,
  //metodo  para lista  de   niveles
  {

    path :'catalogo',
    component:NivelComponent
  },
  //metodo de  la pagina inicial
{
  path:'inicio',
  component:InicioComponent
},
//metodo para el usuario
{
  path:'user',
  component:UsuarioComponent
},
//metodo para el login
{
  path:'login',
  component:LoginComponent
}
,{
  path :'planAnual',
  component :PlanAnualComponent
}
,{
  path :'planMensual',
  component :PlanMensualComponent
}
,{
  path :'planDiario',
  component :PlanDiarioComponent
},
{
  path:'estadistica',
  component:EstadisticasComponent
},
{
  path:'registro',
  component:RegistroComponent
},
{ path :'salir',
  component:LoginOffComponent
}

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
