import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component'; 

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      { path: "home", component: HomeComponent },      
      
    ],
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
