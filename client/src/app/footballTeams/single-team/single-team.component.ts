import { SingleTeamFixturesModel } from './../../models/singleTeamFixturesModels/singleTeamFixturesModel';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { TopTeamsService } from './../services/teams.service';

@Component({
  selector: 'app-single-team',
  templateUrl: './single-team.component.html',
  styleUrls: ['./single-team.component.css']
})
export class SingleTeamComponent implements OnInit {
  private teamFixtures;
  idFromUrl: number = parseInt(this.route.snapshot.params['id']);
  private foundTeam;
  loading: boolean = false;

  constructor(private topTeams: TopTeamsService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit() {

    this.loading = true;

    this.topTeams
      .getTeamFixturesByTeamId(this.idFromUrl)
      .subscribe(teamFixtures => {
          this.teamFixtures = teamFixtures.fixtures;
          this.loading = false;          
      });
    if(!this.loading){
      this.loading = true;
    }
    this.topTeams
      .getOneTeamById(this.idFromUrl)
      .subscribe(getTeam => {
          this.foundTeam = getTeam;
          this.loading = false;
      });

  }
  a() {
    console.log(this.foundTeam);
  }

}
