import { Injectable } from '@angular/core';

@Injectable()
export class AuthCheckService {
    private idToken: string;

    isAuthenticated() {
        if(this.idToken){
            return true;
        } else {
            return false;
        }
    }

    getIdToken() {
        return this.idToken;
    }

    setIdToken(idToken:string) {
        this.idToken = idToken;
    }

    setNull() {
        this.idToken = null;
    }
}