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
import { PlayersComponent } from './players/players.component';
import { PlayComponent } from './play/play.component';

import { TopTeamsService } from './services/teams.service';
import { PlayService } from './services/play.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RulesComponent,
    RankingComponent,
    PlayersComponent,
    PlayComponent
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
  providers: [TopTeamsService, PlayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
