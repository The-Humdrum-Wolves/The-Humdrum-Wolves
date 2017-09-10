import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile.component';

import { AuthGuardService } from '../auth/authGuard/auth-guard.service';

const profileRoutes: Routes = [
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService]  }
]

@NgModule({
    imports: [
        RouterModule.forChild(profileRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ProfileRoutingModule {

}