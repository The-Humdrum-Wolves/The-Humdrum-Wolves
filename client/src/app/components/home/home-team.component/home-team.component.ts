import { ChampionshipRankingsService } from "./../home.service";
import { Router, ActivatedRoute } from '@angular/router';
import { ChampionshipRankings } from './../../../models/leagueTablesModel';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
    selector: 'hw-home-championships',
    templateUrl: './home-team.component.html',
    styleUrls: ['./home-team.component.css']
})

export class HomeTeamComponent implements OnInit {
    public championshipRankings: ChampionshipRankings[];
    competitions;
    idFromUrl: number = parseInt(this.route.snapshot.params['id']);
    foundTeam;

    constructor(private championshipRankingsService: ChampionshipRankingsService, private router: Router, private route: ActivatedRoute) {}
   // constructor(@Inject(ChampionshipRankingsService) private championshipRankingsService: ChampionshipRankingsService) {}

    ngOnInit() {
        this.championshipRankingsService.getRankingsByCompetitionId(this.idFromUrl)
        .subscribe(info => {
            this.championshipRankings = info;
            console.log(info);
        });
    }

    a() {
        console.log(this.championshipRankings);
      }
}