import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { RegisterComponent } from '../components/register/register.component';
import { LoginComponent } from '../components/login/login.component';
import { PageNotFoundComponent } from '../components/pageNotFound/pageNotFound.component';
import { RulesComponent } from './../components/rules/rules.component';
import { RankingComponent } from './../components/ranking/ranking.component';
import { TeamsComponent } from './../components/teams/teams.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'rules', component: RulesComponent },
    { path: 'ranking', component: RankingComponent },
    { path: 'teams', component: TeamsComponent },      
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
