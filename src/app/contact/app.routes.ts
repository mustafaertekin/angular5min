import { ContactComponent } from "../contact/components/contact/contact.component";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    { path: 'contact', component: ContactComponent },
  ];
  
  @NgModule({
    imports: [ RouterModule.forRoot(appRoutes)],
    exports: [ RouterModule]
  })

  export class ContactRouterModule { }