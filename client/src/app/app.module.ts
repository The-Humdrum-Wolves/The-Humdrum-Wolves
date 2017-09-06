import { PlayService } from './services/play.service';
import { PlayersComponent } from './players/players.component';
import { PlayComponent } from './play/play.component';
import { FootballTeamsModule } from './footballTeams/football-teams.module';
import { HttpModule } from '@angular/http';
import { Error404Module } from './error404/error404.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './router/app-routing.module';

import { AuthModule } from './auth/auth.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { RulesComponent } from './components/rules/rules.component';
import { RankingComponent } from './components/ranking/ranking.component';

import { TopTeamsService } from './services/top-teams.service';
import { LoadingBarComponent } from './loading-bar/loading-bar.component';
import { TeamsComponent } from './components/teams/teams.component';
import { ChampionshipRankingsService } from './components/home/home.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RulesComponent,
    RankingComponent,
    PlayComponent,
    PlayersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    Error404Module,
    HttpModule,
    FootballTeamsModule
  ],
  providers: [TopTeamsService, PlayService, ChampionshipRankingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
