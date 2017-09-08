import { ChampionshipRankingsService } from './home.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component/home.component';
import { HomeTeamComponent } from './home-team.component/home-team.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent, HomeTeamComponent],
  exports: [
    HomeComponent,
    HomeTeamComponent
  ],
  providers: [
    ChampionshipRankingsService
  ]
})
export class HomeModule { }