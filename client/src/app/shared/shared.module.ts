import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

import { FormatDatePipe } from './pipes/formatDate.pipe';
import { BoldItalicDirective } from './directives/boldItalic.directive';
import { HideElementDirective } from './directives/hideElement.directive';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    LoadingSpinnerComponent,
    FormatDatePipe,
    BoldItalicDirective,
    HideElementDirective
],
  exports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    LoadingSpinnerComponent,
    FormatDatePipe,
    BoldItalicDirective,
    HideElementDirective
  ]
})
export class SharedModule { }
