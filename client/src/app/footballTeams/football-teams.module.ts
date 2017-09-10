import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

import { PlayersComponent } from './players/players.component';
import { SingleTeamComponent } from './single-team/single-team.component';
import { TeamsComponent } from './teams/teams.component';

import { SortByJerseyNumberPipe } from './players/sortByJerseyNumber.pipe';

import { TopTeamsService } from './services/teams.service';
import { PlayersService } from './services/players.service';
import { AllLeagueTeamsComponent } from './allLeagueTeams/allLeagueTeams.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    TeamsComponent, 
    SingleTeamComponent, 
    PlayersComponent,
    SortByJerseyNumberPipe,
    AllLeagueTeamsComponent
],
  exports: [
    TeamsComponent,
    SingleTeamComponent,
    PlayersComponent,
    AllLeagueTeamsComponent
  ],
  providers: [
    PlayersService, TopTeamsService
  ]
})
export class FootballTeamsModule { }
