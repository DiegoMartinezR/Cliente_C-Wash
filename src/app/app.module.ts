import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import{ PlanContableService}from './services/plan-contable.service';
import {  NivelService} from './services/nivel.service';
import {AuthService}from './services/auth.service';

  import { from } from 'rxjs';
import { InicioComponent } from './components/inicio/inicio.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { PlanAnualComponent } from './components/plan-anual/plan-anual.component';
import { PlanMensualComponent } from './components/plan-mensual/plan-mensual.component';
import { PlanDiarioComponent } from './components/plan-diario/plan-diario.component';
import { LoginComponent } from './components/login/login.component';
import { NivelComponent } from './components/nivel/nivel.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PlanContableFromComponent } from './components/plan-contable-from/plan-contable-from.component';
import { PlanContableListComponent } from './components/plan-contable-list/plan-contable-list.component';

import{FormsModule} from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { LoginOffComponent } from './components/login-off/login-off.component';
import { RegistroComponent } from './components/registro/registro.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PlanContableFromComponent,
    PlanContableListComponent,
    InicioComponent,
    CatalogoComponent,
    UsuarioComponent,
    PlanAnualComponent,
    PlanMensualComponent,
    PlanDiarioComponent,
    LoginComponent,
    NivelComponent,
    FilterPipe,
    EstadisticasComponent,
    LoginOffComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    PlanContableService,
    NivelService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
