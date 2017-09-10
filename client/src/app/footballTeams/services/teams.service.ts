import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { PopularTeamsModel } from './../../models/popularTeamsModels/popularTeamsModel';
import { GetOneTeamModel } from './../../models/oneTeamModel';
import { SingleTeamFixturesModel } from './../../models/singleTeamFixturesModels/singleTeamFixturesModel';

import { ApiHelpers } from './../../apiHelpers/apiHelpers';

@Injectable()
export class TopTeamsService {
  private headers: Headers = new Headers(ApiHelpers.getHeaders());
  private teamsUrl: any;
  private teamFixturesUrl: any;
  private oneTeamUrl: any;
  constructor(private http: Http){}
  getAll(): Observable<PopularTeamsModel> {
    this.teamsUrl = ApiHelpers.competitionUrls(ApiHelpers.availableCompetitionIds.championsLeague);
    
    return this.http.get(this.teamsUrl.competitionTeams,
      { headers: this.headers })
      .map(response => response.json());
  }

  getTeamFixturesByTeamId(id): Observable <SingleTeamFixturesModel>{
    this.teamFixturesUrl = ApiHelpers.otherUrls(id);

    return this.http.get(this.teamFixturesUrl.allFixturesCertainTeam,
      { headers: this.headers })
      .map(response => response.json());
  }

  getOneTeamById(id): Observable <GetOneTeamModel[]>{
    this.oneTeamUrl = ApiHelpers.otherUrls(id);

    return this.http.get(this.oneTeamUrl.oneTeam,
      { headers: this.headers })
      .map(response => response.json());
  }
}
