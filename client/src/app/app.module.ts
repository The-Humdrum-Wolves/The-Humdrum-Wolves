import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './router/app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/pageNotFound/pageNotFound.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RulesComponent } from './components/rules/rules.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { TeamsComponent } from './components/teams/teams.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    PageNotFoundComponent,
    RulesComponent,
    RankingComponent,
    TeamsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
