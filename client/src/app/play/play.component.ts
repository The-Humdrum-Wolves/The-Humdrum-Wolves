import { Component, OnInit } from '@angular/core';
import { PlayService } from './play.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  allMatches;
  loading: boolean = false;
  constructor(private playService: PlayService) { }

  ngOnInit() {
    
    this.loading = true;

    this.playService.getAllFixtures()
    .subscribe(fixtures => {
      this.allMatches = fixtures.fixtures,
      this.loading = false;
    }, () => this.loading = false);    
  }

  a(){
    console.log(this.allMatches);
  }

}
