import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './ingresar/login/login.component';

const routes: Routes = [
  {path: '',redirectTo: '/login', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path: "ingresar", 
  loadChildren: () => import('./ingresar/ingresar.module').then(mod => mod.IngresarModule)},
  {path: "paginaprincipal", 
  loadChildren: () => import('./paginaprincipal/paginaprincipal.module').then(mod => mod.PaginaprincipalModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
