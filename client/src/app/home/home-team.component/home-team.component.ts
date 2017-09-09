import { ChampionshipRankingsService } from "./../home.service";
import { Router, ActivatedRoute } from '@angular/router';
import { ChampionshipRankings } from './../../models/leagueTablesModel';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'hw-home-championships',
    templateUrl: './home-team.component.html',
    styleUrls: ['./home-team.component.css']
})

export class HomeTeamComponent implements OnInit {
    public championshipRankings: ChampionshipRankings;
    idFromUrl: number = parseInt(this.route.snapshot.params['id']);
    loading: boolean = false;

    constructor(private championshipRankingsService: ChampionshipRankingsService, private router: Router, private route: ActivatedRoute) { }
    // constructor(@Inject(ChampionshipRankingsService) private championshipRankingsService: ChampionshipRankingsService) {}

    ngOnInit() {

        this.loading = true;

        this.championshipRankingsService.getRankingsByCompetitionId(this.idFromUrl)
            .subscribe(info => {
                this.championshipRankings = info;
                // console.log(info);
                // console.log(this.idFromUrl);
                // console.log(this.championshipRankings.standing[10]);
            },
            (err) => console.log(err),
            () => this.loading = false);
    }

    a() {
        console.log(this.championshipRankings);
    }
}