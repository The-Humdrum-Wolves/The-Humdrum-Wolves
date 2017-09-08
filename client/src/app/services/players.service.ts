import { ApiHelpers } from './../apiHelpers/apiHelpers';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PlayersService {
  private headers: Headers = new Headers(ApiHelpers.getHeaders('text/plain', 'ca9d984a4c1e4042b295f4eaa19b122e', 'minified'));
  players;
  constructor(private http: Http) { }

  getAllPlayersFromCertainTeam(id): Observable<any> {
    this.players = ApiHelpers.otherUrls(id);
    
    return this.http.get(this.players.allPlayersCertainTeam,
      { headers: this.headers })
      .map(response => response.json());
  }

  a(){
    console.log(this.players);
  }
}