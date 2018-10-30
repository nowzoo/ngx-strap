import { Component, OnInit, AfterContentInit, OnDestroy, ContentChildren,
   QueryList, TemplateRef, ElementRef, Output, Input, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AccordianItemComponent } from '../accordian-item/accordian-item.component';
declare const jQuery: any;
interface TabInfo {
  index: number;
  titleTemplateRef: TemplateRef<any>;
  contentTemplateRef: TemplateRef<any>;
  linkId: string;
  paneId: string;
}

@Component({
  selector: 'ngx-strap-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent implements OnInit, AfterContentInit, OnDestroy {
  static counter = 0;
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  @ContentChildren(AccordianItemComponent) tabComponents: QueryList<AccordianItemComponent>;
  @Input() animated = true;
  @Input() navFlavor = 'nav-tabs';
  @Output() events: EventEmitter<Event> = new EventEmitter();
  @Output() shownTab: EventEmitter<number> = new EventEmitter();

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
    this.id = 'ngx-strap-accordian-' + (++ AccordianComponent.counter);
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
    this.tabs =  this.tabComponents.map((item: AccordianItemComponent, index: number) => {
      return {
        index: index,
        titleTemplateRef: item.titleTemplate,
        contentTemplateRef: item.contentTemplate,
        linkId: `${this.id}-item-link-${index}`,
        paneId: `${this.id}-item-pane-${index}`,
      };
    });
  }

}
