import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit} from '@angular/core';

import { PlayersService } from './../services/players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit  {
  idFromUrl: number = parseInt(this.route.snapshot.params['id']);
  allPlayers;
  subscription;
  constructor(private playersService: PlayersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.playersService.getAllPlayersFromCertainTeam(this.idFromUrl)
      .subscribe(foundPlayers => this.allPlayers = foundPlayers.players);
  }

  a(){
    console.log(this.allPlayers);
  }

}
