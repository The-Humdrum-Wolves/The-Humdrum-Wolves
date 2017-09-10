import { PlayerInfoModel } from './../../models/playersModels/playerInfoModel';
import { PlayerModel } from './../../models/playersModels/playerModel';
import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PlayersService } from './../services/players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit  {
  private idFromUrl: number = parseInt(this.route.snapshot.params['id']);
  allPlayers: PlayerInfoModel[];
  loading: boolean = false;
  constructor(private playersService: PlayersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loading = true;

    this.playersService.getAllPlayersFromCertainTeam(this.idFromUrl)
      .subscribe(foundPlayers => {
        this.allPlayers = foundPlayers.players;
        this.loading = false;
      });
  }

  a(){
    console.log(this.allPlayers);
  }

}
