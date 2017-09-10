import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './router/app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module'
import { PlayModule } from './play/play.module';
import { HomeModule } from './home/home.module';
import { FootballTeamsModule } from './footballTeams/football-teams.module';
import { HttpModule } from '@angular/http';
import { Error404Module } from './error404/error404.module';
import { SharedModule } from './shared/shared.module';

import { PlayersComponent } from './footballTeams/players/players.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component/home.component';
import { RulesComponent } from './rules/rules.component';
import { RankingComponent } from './ranking/ranking.component';

import { ChampionshipRankingsService } from './home/home.service';
import { AuthCheckService } from './auth/authCheck/auth-check.service';
import { LogoutService } from './auth/logout/logout.service';
import { AuthGuardService } from './auth/authGuard/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    RulesComponent,
    RankingComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    ProfileModule,    
    AppRoutingModule,
    SharedModule,
    Error404Module,
    HttpModule,
    FootballTeamsModule,
    PlayModule,
    HomeModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ChampionshipRankingsService, 
    AuthCheckService,
    LogoutService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
