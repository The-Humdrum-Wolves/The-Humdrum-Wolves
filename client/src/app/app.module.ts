import { NgModule } from '@angular/core';
import { AppRoutingModule } from './router/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthModule } from './auth/auth.module';
import { PlayModule } from './play/play.module';
import { FootballTeamsModule } from './footballTeams/football-teams.module';
import { HttpModule } from '@angular/http';
import { Error404Module } from './error404/error404.module';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RulesComponent } from './components/rules/rules.component';
import { RankingComponent } from './components/ranking/ranking.component';

import { ChampionshipRankingsService } from './components/home/home.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
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
    ReactiveFormsModule
  ],

  providers: [ChampionshipRankingsService],

  bootstrap: [AppComponent]
})
export class AppModule { }
