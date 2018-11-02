import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseDirective } from './collapse.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CollapseDirective,
  ],
  exports: [
    CollapseDirective,
  ]
})
export class CollapseModule { }
