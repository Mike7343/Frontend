import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  {path: "", children:[
    {path: "menu", component: MenuComponent},
    {path: "perfil", component: PerfilComponent}
    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginaprincipalRoutingModule { }
