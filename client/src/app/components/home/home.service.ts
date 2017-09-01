import { IChampionshipRankings } from './home.component.module';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

@Injectable()
 export class ChampionshipRankingsService {
    private championshipRankings: IChampionshipRankings[]= [];
    // = [
    // {
    //     leagueCaption: 'Premier League 2017/18',
    //     standing: [{
    //             _links: {
    //                 team: {
    //                     href: 'http://api.football-data.org/v1/teams/66'
    //                 }
    //             },
    //             position: 1,
    //             teamName: 'Manchester United FC',
    //             crestURI: 'http://upload.wikimedia.org/wikipedia/de/d/da/Manchester_United_FC.svg',
    //             playedGames: 3,
    //             points: 9,
    //             goals: 10,
    //             goalsAgainst: 0,
    //             goalDifference: 10,
    //             wins: 3,
    //             draws: 0,
    //             losses: 0,
    //         }]
    // }];

    private headers: Headers = new Headers({
        'x-auth-token': 'ca9d984a4c1e4042b295f4eaa19b122e',
        'Content-Type': 'text/plain'
    });

    constructor(private http: Http) {}
    // public getRankingsOld(): IChampionshipRankings[] {
    //     console.log(this.championshipRankings);
    //     return this.championshipRankings;
    // }

    public getRankings(): Observable<IChampionshipRankings[]> {
        return this.http
        .get('http://api.football-data.org/v1/competitions/445/leagueTable', {headers: this.headers})
        .map(x => x.json() as IChampionshipRankings[]);
    }
    // public getRankingAsync(): Observable<IChampionshipRankings[]> {
    //     const obsv = Observable.create((observer: Observer<IChampionshipRankings[]>) => {
    //         observer.next(this.championshipRankings);

    //         observer.complete();

    //         setTimeout(function() {
    //             observer.next([
    //                 { leagueCaption: 'Calcho 2017/18',
    //                 standing: [{
    //                         _links: {
    //                             team: {
    //                                 href: 'http://api.football-data.org/v1/teams/66'
    //                             }
    //                         },
    //                         position: 1,
    //                         teamName: 'Fiorentina',
    //                         crestURI: 'http://upload.wikimedia.org/wikipedia/de/d/da/Manchester_United_FC.svg',
    //                         playedGames: 22223,
    //                         points: 9222,
    //                         goals: 10222,
    //                         goalsAgainst: 22,
    //                         goalDifference: 22222,
    //                         wins: 322,
    //                         draws: 222,
    //                         losses: 20,
    //                     }]}
    //             ]);
    //         }, 2000);
    //     });

    //     return obsv;
    // }
 }
