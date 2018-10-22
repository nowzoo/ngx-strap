import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxStrapTabsComponent } from './tabs.component';
import { NgxStrapTabDirective } from './tab.directive';
import { NgxStrapTabTitleDirective } from './tab-title.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgxStrapTabsComponent, NgxStrapTabDirective, NgxStrapTabTitleDirective],
  exports: [NgxStrapTabsComponent, NgxStrapTabDirective, NgxStrapTabTitleDirective]
})
export class NgxStrapTabsModule { }
