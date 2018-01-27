import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module'
import { AboutModule } from './about/about.module'
import { HomeComponent } from './home/components/home/home.component'
import { ContactModule } from './contact/contact.module'
import { MainComponent } from './components/main/main.component';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    
  MainComponent],
  imports: [
    BrowserModule,
    HomeModule,
    AboutModule,
    ContactModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
