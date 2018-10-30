import { Component, OnInit, AfterContentInit, OnDestroy, ContentChildren,
   QueryList, TemplateRef, ElementRef, Output, Input, EventEmitter, NgZone } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
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
  exportAs: 'ngxStrapTabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit, AfterContentInit, OnDestroy {
  static counter = 0;
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  private _shownTab: Subject<number> = new BehaviorSubject(0);

  @ContentChildren(TabComponent) tabComponents: QueryList<TabComponent>;
  @Input() initialTab = 0;
  @Input() animated = true;
  @Input() containerClass = '';
  @Input() navContainerClass = '';
  @Input() contentContainerClass = '';
  @Input() navClass = 'nav nav-tabs';
  @Input() navLinkClass = 'nav-item nav-link';
  @Output() events: EventEmitter<Event> = new EventEmitter();
  @Output() shownTab: Observable<number> = this._shownTab.asObservable();

  tabListClass: string;
  tabListItemClass: string;
  tabListItemAnchorClass: string;
  id: string;
  tabs: TabInfo[] = [];
  bsListener: any = null;
  currentlyShown = -1;

  constructor(
    private elementRef: ElementRef,
    private ngZone: NgZone
  ) { }

  get bootstrapEvents(): string {
    return ['show', 'shown', 'hide', 'hidden'].map(t => `${t}.bs.tab`).join(' ');
  }
  get $el(): any {
    return jQuery(this.elementRef.nativeElement);
  }
  ngOnInit() {
    this._shownTab.next(this.initialTab);
    this.id = 'ngx-strap-tabs-' + (++ TabsComponent.counter);
    this.ngZone.runOutsideAngular(() => {
      this.bsListener = (event: Event) => {
        this.ngZone.run(() => {
          switch (event.type) {
            case 'shown':
              const i = this.tabs.findIndex((value: TabInfo) => {
                return (event.target as any).id === value.linkId;
              });
              this._shownTab.next(i);
              break;
          }
          this.events.emit(event);
        });

      };
    });

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
    this.$el.off(this.bootstrapEvents, this.bsListener);
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
