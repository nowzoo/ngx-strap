import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseDirective } from './collapse.directive';
import { CollapseToggleDirective } from './collapse-toggle.directive';
// import { CollapsibleItemComponent } from './collapsible-item.component';
// import { ListGroupAccordianComponent } from './list-group-accordian/list-group-accordian.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CollapseDirective,
    CollapseToggleDirective,
    // CollapsibleItemComponent,
  //  ListGroupAccordianComponent,
  ],
  exports: [
    CollapseDirective,
    CollapseToggleDirective,
    // CollapsibleItemComponent,
    // ListGroupAccordianComponent,
  ]
})
export class CollapseModule { }
