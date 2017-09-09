import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './../auth/register/register.component';
import { LoginComponent } from './../auth/login/login.component';
import { PageNotFoundComponent } from './../error404/pageNotFound/pageNotFound.component';
import { RulesComponent } from './../components/rules/rules.component';
import { RankingComponent } from './../components/ranking/ranking.component';
import { TeamsComponent } from './../footballTeams/teams/teams.component';
import { PlayersComponent } from './../footballTeams/players/players.component';
import { PlayComponent } from './../play/play.component';
import { SingleTeamComponent } from './../footballTeams/single-team/single-team.component';
import { HomeComponent } from "../components/home/home.component/home.component";
import { HomeTeamComponent } from "../components/home/home-team.component/home-team.component";
import { AllLeagueTeamsComponent } from './../footballTeams/allLeagueTeams/allLeagueTeams.component';


const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'rules', component: RulesComponent },
    { path: 'ranking', component: RankingComponent },
    { path: 'play', component: PlayComponent },
    { path: 'teams', component: TeamsComponent },
    { path: 'allLeagueTeams', component: AllLeagueTeamsComponent },    
    { path: 'team/:id', component: SingleTeamComponent },
    { path: 'team/:id/players', component: PlayersComponent },
    { path: 'competition/:id', component: HomeTeamComponent },       
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },  
]
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes,  { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}
