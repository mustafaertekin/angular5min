
import { AboutComponent } from "../about/components/about/about.component";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from "./components/overview/overview.component";
import { TeamComponent } from "./components/team/team.component";


const appRoutes: Routes = [
    { path: 'about', component: AboutComponent, 
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: OverviewComponent },
      { path: 'team', component: TeamComponent },
    ]},
  ];
  
  @NgModule({
    imports: [ RouterModule.forRoot(appRoutes)],
    exports: [ RouterModule]
  })

  export class AboutRouterModule { }