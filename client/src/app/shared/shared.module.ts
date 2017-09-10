import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

import { FormatDatePipe } from './pipes/formatDate.pipe';

import { BoldItalicDirective } from './directives/boldItalic.directive';
import { HideElementDirective } from './directives/hideElement.directive';
import { AlignMiddleAndCenterDirective } from './directives/alignMiddleAndCenter.directive';



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
    HideElementDirective,
    AlignMiddleAndCenterDirective
],
  exports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    LoadingSpinnerComponent,
    FormatDatePipe,
    BoldItalicDirective,
    HideElementDirective,
    AlignMiddleAndCenterDirective
  ]
})
export class SharedModule { }
