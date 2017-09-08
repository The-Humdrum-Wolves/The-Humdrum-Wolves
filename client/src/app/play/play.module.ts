import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';

import { PlayComponent } from './play.component';

import { PlayService } from './play.service';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [PlayComponent],
  providers: [
    PlayService
  ]
})
export class PlayModule { }