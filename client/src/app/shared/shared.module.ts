import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { FormatDatePipe } from './formatDate.pipe';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [HeaderComponent, FooterComponent, LoadingSpinnerComponent,
    FormatDatePipe
],
  exports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    LoadingSpinnerComponent,
    FormatDatePipe
  ]
})
export class SharedModule { }
