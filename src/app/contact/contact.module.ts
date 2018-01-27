import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';
import { ContactRouterModule } from './app.routes';

@NgModule({
  imports: [
    CommonModule,
    ContactRouterModule
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
