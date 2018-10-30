import { OnInit, AfterContentInit, OnDestroy, ContentChildren,
   QueryList, TemplateRef, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CollapsibleItemComponent } from './collapsible-item.component';

export interface CollapsibleListItemInfo {
  index: number;
  titleTemplate: TemplateRef<any>;
  contentTemplate: TemplateRef<any>;
  linkId: string;
  paneId: string;
}
export abstract class CollapsibleListComponent implements OnInit, AfterContentInit, OnDestroy {
  static counter = 0;
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  @Input() initiallySelected = 0;
  @ContentChildren(CollapsibleItemComponent) itemComponents: QueryList<CollapsibleItemComponent>;
  id: string;
  items: CollapsibleListItemInfo[] = [];
  currentlySelected = -1;
  ngOnInit() {
    this.id = `ngx-collapsible-list-${++CollapsibleListComponent.counter}`;
  }
  ngAfterContentInit() {
    this.itemComponents.changes
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(() => {
        this.updateItems();
      });
    this.updateItems();
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  updateItems() {
    this.items =  this.itemComponents.map((item: CollapsibleItemComponent, index: number) => {
      return {
        index: index,
        titleTemplate: item.titleTemplate,
        contentTemplate: item.contentTemplate,
        linkId: `${this.id}-item-link-${index}`,
        paneId: `${this.id}-item-pane-${index}`,
      };
    });
    let selected;
    if (this.currentlySelected === -1) {
      selected = this.initiallySelected;
    } else {
      selected = this.currentlySelected;
    }
    selected = Math.min(Math.max(0, selected), this.items.length - 1);
    this.show(selected);
  }

  show(index: number, event?: Event) {
    if (event) {
      event.preventDefault();
    }
    this.currentlySelected = index;
  }

}
