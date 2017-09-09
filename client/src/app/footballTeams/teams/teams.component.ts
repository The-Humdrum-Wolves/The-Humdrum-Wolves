import { Router, ActivatedRoute } from '@angular/router';
import { TopTeamsService } from './../services/teams.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  
  teams;
  loading: boolean = false;
  
  constructor(private topTeams: TopTeamsService) { }

  ngOnInit() {
    this.loading = true;

    this.topTeams
        .getAll()
        .subscribe(info => {
          this.teams = info.teams,
          this.loading = false;
        }, () => this.loading = false);
  }

  a() {
    console.log(this.teams);
  }


}
