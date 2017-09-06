import { ApiHelpers } from './../apiHelpers/apiHelpers';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PlayService {

  fixtures;
  private headers: Headers = new Headers(ApiHelpers.getHeaders('text/plain', 'ca9d984a4c1e4042b295f4eaa19b122e', 'minified'));
  
  constructor(private http: Http) { }

  getAllFixtures(): Observable<any> {
    this.fixtures = ApiHelpers.otherUrls();
    
    return this.http.get(this.fixtures,
      { headers: this.headers })
      .map(response => response.json());
  }

}
