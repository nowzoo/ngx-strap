import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxStrapIsInvalidDirective } from './is-invalid.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgxStrapIsInvalidDirective],
  exports: [NgxStrapIsInvalidDirective]
})
export class NgxStrapFormModule { }
