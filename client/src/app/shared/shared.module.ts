import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [HeaderComponent, FooterComponent, LoadingSpinnerComponent],
  exports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    LoadingSpinnerComponent
  ]
})
export class SharedModule { }
