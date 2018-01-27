import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { AboutRouterModule } from './app.routes';
import { TeamComponent } from './components/team/team.component';
import { OverviewComponent } from './components/overview/overview.component';

@NgModule({
  imports: [
    CommonModule,
    AboutRouterModule
  ],
  declarations: [AboutComponent, TeamComponent, OverviewComponent]
})
export class AboutModule { }
