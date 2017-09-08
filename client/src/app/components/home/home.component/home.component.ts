import { ChampionshipRankingsService } from "./../home.service";
import { Router, ActivatedRoute } from '@angular/router';
import { Championships } from './../../../models/homePageModel';
import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';

@Component({
    selector: 'hw-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements AfterViewInit  {
    championships: Championships[];
    foundTeam;

    constructor(private championshipRankingsService: ChampionshipRankingsService) {}
   // constructor( private router: Router, private route: ActivatedRoute) {}
   // constructor(@Inject(ChampionshipRankingsService) private championshipRankingsService: ChampionshipRankingsService) {}

   ngAfterViewInit () {
        this.championshipRankingsService
        .getAll()
        .subscribe(info => this.championships = info);
    }

    a() {
        console.log(this.championships.length);
      }
}