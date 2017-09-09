import { NgModule } from '@angular/core';
import { AppRoutingModule } from './router/app-routing.module';

import { AuthModule } from './auth/auth.module';
import { PlayModule } from './play/play.module';
import { HomeModule } from './components/home/home.module';
// import { PlayService } from './services/play.service';
// import { PlayersComponent } from './players/players.component';
import { PlayComponent } from './play/play.component';
import { FootballTeamsModule } from './footballTeams/football-teams.module';
import { HttpModule } from '@angular/http';
import { Error404Module } from './error404/error404.module';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { RulesComponent } from './components/rules/rules.component';
import { RankingComponent } from './components/ranking/ranking.component';

import { ChampionshipRankingsService } from './components/home/home.service';
import { TopTeamsService } from "./footballTeams/services/teams.service";
import { PlayService } from "./play/play.service";


@NgModule({
  declarations: [
    AppComponent,
    RulesComponent,
    RankingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    Error404Module,
    HttpModule,
    FootballTeamsModule,
    PlayModule,
    HomeModule
  ],
  providers: [TopTeamsService, PlayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
