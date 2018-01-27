
import { HomeComponent } from "./components/home/home.component";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
  ];
  
  @NgModule({
    imports: [ RouterModule.forRoot(appRoutes)],
    exports: [ RouterModule]
  })

  export class HomeRouterModule { }