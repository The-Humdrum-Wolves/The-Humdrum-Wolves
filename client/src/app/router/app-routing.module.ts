import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { RegisterComponent } from './../auth/register/register.component';
import { LoginComponent } from './../auth/login/login.component';
import { PageNotFoundComponent } from './../error404/pageNotFound/pageNotFound.component';
import { RulesComponent } from './../components/rules/rules.component';
import { RankingComponent } from './../components/ranking/ranking.component';
import { TeamsComponent } from './../footballTeams/teams/teams.component';
import { PlayersComponent } from './../footballTeams/players/players.component';
import { PlayComponent } from './../play/play.component';
import { SingleTeamComponent } from './../footballTeams/single-team/single-team.component';
import { ProfileComponent } from '../profile/profile.component';

import { AuthGuardService } from '../auth/authGuard/auth-guard.service';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService]  },
    { path: 'rules', component: RulesComponent, canActivate: [AuthGuardService] },
    { path: 'ranking', component: RankingComponent, canActivate: [AuthGuardService] },
    { path: 'play', component: PlayComponent, canActivate: [AuthGuardService] },
    { path: 'teams', component: TeamsComponent},
    { path: 'team/:id', component: SingleTeamComponent, canActivate: [AuthGuardService] },
    { path: 'team/:id/players', component: PlayersComponent, canActivate: [AuthGuardService] },    
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
  ];

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
