import { Component, OnInit } from '@angular/core';
import { PlayService } from './../services/play.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  allMatches;
  constructor(private playService: PlayService) { }

  ngOnInit() {
    this.playService.getAllFixtures()
    .subscribe(fixtures => this.allMatches = fixtures.fixtures);    
  }

  a(){
    console.log(this.allMatches);
  }

}
