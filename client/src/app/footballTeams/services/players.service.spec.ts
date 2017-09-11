import { Http } from '@angular/http';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlayersService } from './players.service';

describe('Service: Player', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayersService]
    });
  });

  it('should ...', inject([PlayersService], (service: PlayersService) => {
    expect(service).toBeTruthy();
  }));
});