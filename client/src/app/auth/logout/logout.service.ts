import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthCheckService } from "../authCheck/auth-check.service";
import { ConfigService } from "../../config/config.service";


@Injectable()
export class LogoutService {
    constructor(
        private http: HttpClient,
        private authCheck: AuthCheckService,
        private config: ConfigService
    ){}

    logout(){
        this.http.get(this.config.serverUrl + '/auth/logout')
            .subscribe(() => this.authCheck.setNull());
    }
}