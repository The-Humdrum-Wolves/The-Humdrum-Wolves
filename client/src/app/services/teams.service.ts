import { ApiHelpers } from './../apiHelpers/apiHelpers';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TopTeamsService {
  private headers: Headers = new Headers(ApiHelpers.getHeaders('text/plain', 'ca9d984a4c1e4042b295f4eaa19b122e', 'minified'));
  private teamsUrl;
  private teamFixturesUrl;
  
  constructor(private http: Http){}
  getAll(): Observable<any> {
    this.teamsUrl = ApiHelpers.competitionUrls(ApiHelpers.availableCompetitionIds.championsLeague);
    
    return this.http.get(this.teamsUrl.competitionTeams,
      { headers: this.headers })
      .map(response => response.json());
  }

  getTeamFixturesByTeamId(id): Observable <any>{
    this.teamFixturesUrl = ApiHelpers.otherUrls(id);

    return this.http.get(this.teamFixturesUrl.allFixturesCertainTeam,
      { headers: this.headers })
      .map(response => response.json());
  }

  getOneTeamById(id): Observable <any>{
    this.teamFixturesUrl = ApiHelpers.otherUrls(id);

    return this.http.get(this.teamFixturesUrl.oneTeam,
      { headers: this.headers })
      .map(response => response.json());
  }
}
