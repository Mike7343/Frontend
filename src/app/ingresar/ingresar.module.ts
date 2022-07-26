import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngresarRoutingModule } from './ingresar-routing.module';
import { LoginComponent } from './login/login.component';
import { NuevousuarioComponent } from './nuevousuario/nuevousuario.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    NuevousuarioComponent
  ],
  imports: [
    CommonModule,
    IngresarRoutingModule,
    FormsModule
  ]
})
export class IngresarModule { }
