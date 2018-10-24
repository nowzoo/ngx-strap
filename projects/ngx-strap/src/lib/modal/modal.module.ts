import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDirective } from './modal.directive';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ModalDirective
  ],
  exports: [
    ModalDirective
  ]
})
export class ModalModule {}
