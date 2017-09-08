import { Component } from '@angular/core';

@Component({
    selector: 'hw-pageNotFound',
    templateUrl: './pageNotFound.component.html',
    styleUrls: ['./pageNotFound.component.css']
})
export class PageNotFoundComponent {
    pageNotFound: string = '404 Page Not Found';
}
