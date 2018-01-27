import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HomeRouterModule } from './app.routes';

@NgModule({
  imports: [
    CommonModule,
    HomeRouterModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
