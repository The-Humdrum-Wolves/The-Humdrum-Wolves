import { Injectable }     from '@angular/core';
import { CanActivate }    from '@angular/router';
import { AuthCheckService } from '../authCheck/auth-check.service';

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(
      private authCheck: AuthCheckService
    ) {}

  canActivate() { 
    return this.authCheck.isAuthenticated();
  }
}