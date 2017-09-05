import { TestBed, inject } from '@angular/core/testing';

import { TopTeamsService } from './top-teams.service';

describe('TopTeamsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TopTeamsService]
    });
  });

  it('should be created', inject([TopTeamsService], (service: TopTeamsService) => {
    expect(service).toBeTruthy();
  }));
});
