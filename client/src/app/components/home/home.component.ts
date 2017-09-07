import { ChampionshipRankingsService } from './home.service';
import { IChampionshipRankings } from './home.component.module';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
    selector: 'hw-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    public championshipRankings: IChampionshipRankings[];

    constructor(private championshipRankingsService: ChampionshipRankingsService) {}
   // constructor(@Inject(ChampionshipRankingsService) private championshipRankingsService: ChampionshipRankingsService) {}

    ngOnInit() {
        this.championshipRankingsService.getRankings()
        .subscribe(info => {
            this.championshipRankings = info;
            console.log(info);
        });
    }
}