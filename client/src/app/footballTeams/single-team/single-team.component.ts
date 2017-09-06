import { ClientPage } from './../../../../e2e/app.po';
import { Router, ActivatedRoute } from '@angular/router';
import { TopTeamsService } from './../../services/teams.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-single-team',
  templateUrl: './single-team.component.html',
  styleUrls: ['./single-team.component.css']
})
export class SingleTeamComponent implements OnInit {
  teamFixtures;
  idFromUrl: number = parseInt(this.route.snapshot.params['id']);
  foundTeam;

  constructor(private topTeams: TopTeamsService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit() {
    this.topTeams
      .getTeamFixturesByTeamId(this.idFromUrl)
      .subscribe(teamFixtures => this.teamFixtures = teamFixtures.fixtures);

// to do when get only one object from observable subscription in html foundTeam.name has error in console but displays the name
    this.topTeams
      .getOneTeamById(this.idFromUrl)
      .subscribe(getTeam => this.foundTeam = getTeam)
  }
  a() {
    console.log(this.foundTeam);
  }

}
