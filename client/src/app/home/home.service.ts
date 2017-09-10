import { GetOneTeamModel } from './../models/oneTeamModel';
import { ClientPage } from './../../../e2e/app.po';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ChampionshipRankings } from "./../models/leagueTableModels/leagueTablesModel";
import { HomePageModel } from './../models/homePageModel';

import { ApiHelpers } from "../apiHelpers/apiHelpers";

@Injectable()
 export class ChampionshipRankingsService {
    private championshipRankings: any;
    private competitionUrls;
    private competitionId;
    
    private headers: Headers = new Headers(ApiHelpers.getHeaders());

    constructor(private http: Http) {}
    getAll(): Observable<HomePageModel> {
        this.competitionUrls = ApiHelpers.competitionUrls();

        return this.http.get(this.competitionUrls,
          { headers: this.headers })
          .map(response => response.json());
      }
    
      getRankingsByCompetitionId(id): Observable <ChampionshipRankings>{
        this.competitionId = ApiHelpers.competitionUrls(id);

        return this.http.get(this.competitionId.competitionLeagueTable,
          { headers: this.headers })
          .map(response => response.json());
      }
    
      getOneTeamById(id): Observable <GetOneTeamModel[]>{
        this.competitionId = ApiHelpers.otherUrls(id);

        return this.http.get(this.competitionId.oneTeam,
          { headers: this.headers })
          .map(response => response.json());
      }
 }
