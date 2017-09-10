import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ChampionshipRankings } from './../../models/leagueTableModels/leagueTablesModel';

import { ChampionshipRankingsService } from "./../home.service";

@Component({
    selector: 'hw-home-championships',
    templateUrl: './home-team.component.html',
    styleUrls: ['./home-team.component.css']
})

export class HomeTeamComponent implements OnInit {
    private statistics: any;
    private leagueName: string;
    idFromUrl: number = parseInt(this.route.snapshot.params['id']);
    loading: boolean = false;

    constructor(private championshipRankingsService: ChampionshipRankingsService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {

        this.loading = true;

        this.championshipRankingsService.getRankingsByCompetitionId(this.idFromUrl)
            .subscribe(info => {
                this.statistics = info.standing;
                this.leagueName = info.leagueCaption;
                this.loading = false;
            },() => this.loading = false);
    }

    a() {
        console.log(this.statistics);
    }
}