import { FixturesModel } from './../models/allFixturesModels/fixturesModel';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ApiHelpers } from './../apiHelpers/apiHelpers';

@Injectable()
export class PlayService {
  private fixtures: any;
  private headers: Headers = new Headers(ApiHelpers.getHeaders());
  constructor(private http: Http) { }

  getAllFixtures(): Observable<FixturesModel> {
    this.fixtures = ApiHelpers.otherUrls();

    return this.http.get(this.fixtures,
      { headers: this.headers })
      .map(response => response.json());
  }

}
