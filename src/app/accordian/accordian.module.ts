import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordianComponent } from './accordian/accordian.component';
import { AccordianItemComponent } from './accordian-item/accordian-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AccordianComponent,
    AccordianItemComponent
  ],
  exports: [
    AccordianComponent,
    AccordianItemComponent
  ]
})
export class AccordianModule { }
