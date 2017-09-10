import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ChampionshipRankings } from "../models/leagueTablesModel";
import { HomePageModel } from './../models/homePageModel';

import { ApiHelpers } from "../apiHelpers/apiHelpers";


@Injectable()
 export class ChampionshipRankingsService {
    private championshipRankings: ChampionshipRankings;
    private competitionUrls;
    private competitionId;
    
    private headers: Headers = new Headers(ApiHelpers.getHeaders());

    constructor(private http: Http) {}
    getAll(): Observable<HomePageModel> {
        this.competitionUrls = ApiHelpers.competitionUrls();
        console.log(this.competitionUrls);

        return this.http.get(this.competitionUrls,
          { headers: this.headers })
          .map(response => response.json());
      }
    
      getRankingsByCompetitionId(id): Observable <any>{
        this.competitionId = ApiHelpers.competitionUrls(id);
    
        return this.http.get(this.competitionId.competitionLeagueTable,
          { headers: this.headers })
          .map(response => response.json());
      }
    
      getOneTeamById(id): Observable <any>{
        this.competitionId = ApiHelpers.otherUrls(id);
    
        return this.http.get(this.competitionId.oneTeam,
          { headers: this.headers })
          .map(response => response.json());
      }
 }
