import { Component } from '@angular/core';

import { AuthCheckService } from '../../auth/authCheck/auth-check.service';
import { LogoutService } from '../../auth/logout/logout.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    constructor(
        private authCheck: AuthCheckService,
        private logoutService: LogoutService
    ) {}

    logout() {
        this.logoutService.logout();
    }
}
