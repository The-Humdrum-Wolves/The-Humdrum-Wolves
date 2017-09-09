import { PlayersService } from './../services/players.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit, OnDestroy  {
  idFromUrl: number = parseInt(this.route.snapshot.params['id']);
  allPlayers;
  subscription;
  constructor(private playersService: PlayersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.playersService.getAllPlayersFromCertainTeam(this.idFromUrl)
      .subscribe(foundPlayers => this.allPlayers = foundPlayers.players);
  }

  ngOnDestroy() {
    console.log(44);
    this.subscription.unsubscribe();
  }

  a(){
    console.log(this.allPlayers);
  }

}
