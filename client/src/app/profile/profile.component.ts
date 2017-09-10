import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { AuthCheckService } from '../auth/authCheck/auth-check.service';

@Component({
    selector: 'hw-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    userId: string;
    user;

    constructor(
        private http: HttpClient,
        private authCheck: AuthCheckService
    ) {}

    ngOnInit(): void {
        this.userId = this.authCheck.getIdToken();
        console.log(this.userId);
        // TODO: Delay view render until data is retrieved
        this.http.get('http://localhost:3000/users/' + this.userId)
            .subscribe((user) => {
                console.log('here');
                console.log(user);
                return this.user = user
            });
    }
}