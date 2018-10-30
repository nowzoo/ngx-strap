import { Component, OnInit, AfterContentInit, OnDestroy, ContentChildren,
   QueryList, TemplateRef, ElementRef, Output, Input, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TabComponent } from '../tab/tab.component';
declare const jQuery: any;
interface TabInfo {
  index: number;
  titleTemplateRef: TemplateRef<any>;
  contentTemplateRef: TemplateRef<any>;
  linkId: string;
  paneId: string;
  disabled: boolean;
}
@Component({
  selector: 'ngx-strap-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit, AfterContentInit, OnDestroy {
  static counter = 0;
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  @ContentChildren(TabComponent) tabComponents: QueryList<TabComponent>;
  @Input() animated = true;
  @Input() navFlavor: 'tabs' | 'pills' | 'list' = 'tabs';
  @Input() tabListColumnClass = 'col-12';
  @Input() tabContentColumnClass = 'col-12';

  @Output() events: EventEmitter<Event> = new EventEmitter();
  @Output() shownTab: EventEmitter<number> = new EventEmitter();

  tabListClass: string;
  tabListItemClass: string;
  tabListItemAnchorClass: string;
  id: string;
  tabs: TabInfo[] = [];
  bsListener: any = null;
  currentlyShown = -1;

  constructor(
    private elementRef: ElementRef
  ) { }

  get bootstrapEvents(): string {
    return ['show', 'shown', 'hide', 'hidden'].map(t => `${t}.bs.tab`).join(' ');
  }
  get $el(): any {
    return jQuery(this.elementRef.nativeElement);
  }
  ngOnInit() {
    switch (this.navFlavor) {
      case 'tabs':
        this.tabListClass = 'nav nav-tabs';
        this.tabListItemClass = 'nav-item';
        this.tabListItemAnchorClass = 'nav-link';
        break;
      case 'pills':
        this.tabListClass = 'nav nav-pills';
        this.tabListItemClass = 'nav-item';
        this.tabListItemAnchorClass = 'nav-link';
        break;
      case 'list':
        this.tabListClass = 'list-group';
        this.tabListItemClass = 'list-group-item';
        this.tabListItemAnchorClass = 'list-group-item-action';
        break;
    }
    this.id = 'ngx-strap-tabs-' + (++ TabsComponent.counter);
    this.bsListener = (event: Event) => {
      switch (event.type) {
        case 'shown':
          const i = this.tabs.findIndex((value: TabInfo) => {
            return (event.target as any).id === value.linkId;
          });
          this.shownTab.emit(i);
          break;
      }
      this.events.emit(event);
    };
    this.$el.on(this.bootstrapEvents, this.bsListener);
  }
  ngAfterContentInit() {
    this.tabComponents.changes
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(() => {
        this.updateTabs();
      });
    this.updateTabs();
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  updateTabs() {
    this.tabs =  this.tabComponents.map((item: TabComponent, index: number) => {
      return {
        index: index,
        titleTemplateRef: item.titleTemplateRef,
        contentTemplateRef: item.contentTemplateRef,
        linkId: `${this.id}-item-link-${index}`,
        paneId: `${this.id}-item-pane-${index}`,
        disabled: item.tabDisabled
      };
    });
  }

}
