import { ApiHelpers } from "../../apiHelpers/apiHelpers";
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import { ChampionshipRankings } from "../../models/leagueTablesModel";



@Injectable()
 export class ChampionshipRankingsService {
    private championshipRankings: ChampionshipRankings[];
    private competitionUrls;
    private competitionId;

    private headers: Headers = new Headers({
        'X-Auth-Token': 'ca9d984a4c1e4042b295f4eaa19b122e',
        'Content-Type': 'text/plain',
        'X-Response-Control': 'minified'
    });

    constructor(private http: Http) {}

    getAll(): Observable<any> {
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
