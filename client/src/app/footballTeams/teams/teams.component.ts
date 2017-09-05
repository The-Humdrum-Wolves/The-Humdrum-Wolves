import { Router, ActivatedRoute } from '@angular/router';
import { TopTeamsService } from './../../services/top-teams.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  
  public teams;
  constructor(private topTeams: TopTeamsService) { }

  ngOnInit() {
    this.topTeams
        .getAll()
        .subscribe(info => this.teams = info.teams);
  }

  a() {
    console.log(this.teams);
  }


}
