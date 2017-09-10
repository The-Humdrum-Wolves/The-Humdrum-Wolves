import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthCheckService } from "../authCheck/auth-check.service";


@Injectable()
export class LogoutService {
    constructor(
        private http: HttpClient,
        private authCheck: AuthCheckService
    ){}

    logout(){
        this.http.get('http://localhost:3000/auth/logout')
            .subscribe(() => this.authCheck.setNull());
    }
}