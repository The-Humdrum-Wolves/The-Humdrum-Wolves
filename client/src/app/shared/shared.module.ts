import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoadingBarComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [HeaderComponent, FooterComponent, LoadingBarComponent],
  exports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    LoadingBarComponent
  ]
})
export class SharedModule { }
