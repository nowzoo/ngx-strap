import { Component, ContentChild,  ViewChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'ngx-strap-collapsible-item',
  template: `
  <ng-template #titleTemplate>
    <ng-container *ngIf="itemTitleTemplate">
      <ng-container *ngTemplateOutlet="itemTitleTemplate"></ng-container>
    </ng-container>
    <ng-container *ngIf="!itemTitleTemplate">
      {{itemTitle}}
    </ng-container>
  </ng-template>
  <ng-template #contentTemplate>
    <ng-content></ng-content>
  </ng-template>`,
})
export class CollapsibleItemComponent {
  @ContentChild('itemTitleTemplate') itemTitleTemplate: TemplateRef<any>;
  @ViewChild('titleTemplate') titleTemplate: TemplateRef<any>;
  @ViewChild('contentTemplate') contentTemplate: TemplateRef<any>;
  @Input() itemTitle = 'Untitled Item';
}
