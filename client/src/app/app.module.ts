import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './router/app-routing.module';

import { AuthModule } from './auth/auth.module';
import { PlayModule } from './play/play.module';
import { HomeModule } from './home/home.module';
import { FootballTeamsModule } from './footballTeams/football-teams.module';
import { HttpModule } from '@angular/http';
import { Error404Module } from './error404/error404.module';
import { SharedModule } from './shared/shared.module';

import { PlayersComponent } from './footballTeams/players/players.component';
import { AppComponent } from './app.component';
import { RulesComponent } from './rules/rules.component';
import { RankingComponent } from './ranking/ranking.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
