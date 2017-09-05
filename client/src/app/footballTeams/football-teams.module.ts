import { SingleTeamComponent } from './single-team/single-team.component';
import { TeamsComponent } from './teams/teams.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [TeamsComponent, SingleTeamComponent],
  exports: [
    TeamsComponent,
    SingleTeamComponent
  ]
})
export class FootballTeamsModule { }
