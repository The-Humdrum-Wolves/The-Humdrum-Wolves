import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { HomePageModel } from './../../models/homePageModel';
import { ChampionshipRankingsService } from "./../home.service";

@Component({
    selector: 'hw-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    private championships;
    loading: boolean;
    constructor(private championshipRankingsService: ChampionshipRankingsService) { }
    ngOnInit() {
        this.loading = true;

        this.championshipRankingsService
            .getAll()
            .subscribe((info) => {
                this.championships = info,
                this.loading = false;
            }, () => this.loading = false);
    }

    a() {
        console.log(this.championships);
    }
}