import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './componentes/nav/nav.component';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AsistenciaComponent } from './componentes/asistencia/asistencia.component';
import { NotasComponent } from './componentes/notas/notas.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    AsistenciaComponent,
    NotasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //Usar html,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//actualizacion