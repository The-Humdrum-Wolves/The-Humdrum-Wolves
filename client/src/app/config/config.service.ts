import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class ConfigService {
    serverUrl: string;

    constructor() {
        this.serverUrl = 'http://localhost:3000';
    }
}