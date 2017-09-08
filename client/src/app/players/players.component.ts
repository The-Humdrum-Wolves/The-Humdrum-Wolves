import { PlayersService } from './../services/players.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  idFromUrl: number = parseInt(this.route.snapshot.params['id']);
  allPlayers;
  constructor(private playersService: PlayersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.playersService.getAllPlayersFromCertainTeam(this.idFromUrl)
      .subscribe(foundPlayers => this.allPlayers = foundPlayers.players);
  }

  a(){
    console.log(this.allPlayers);
  }

}
