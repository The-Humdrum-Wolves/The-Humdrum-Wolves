import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ApiHelpers } from "./../../apiHelpers/apiHelpers";

import { PlayerModel } from './../../models/playersModels/playerModel';

@Injectable()
export class PlayersService {
  private headers: Headers = new Headers(ApiHelpers.getHeaders());
  private players: any;
  constructor(private http: Http) { }

  getAllPlayersFromCertainTeam(id): Observable<PlayerModel> {
    this.players = ApiHelpers.otherUrls(id);
    
    return this.http.get(this.players.allPlayersCertainTeam,
      { headers: this.headers })
      .map(response => response.json());
  }

  a(){
    console.log(this.players);
  }
}