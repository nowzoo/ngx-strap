import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxStrapModalDirective } from './modal.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgxStrapModalDirective
  ],
  exports: [
    NgxStrapModalDirective
  ]
})
export class NgxStrapModalModule { }
