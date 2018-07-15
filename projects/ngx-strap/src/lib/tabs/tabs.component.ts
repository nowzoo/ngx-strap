import {
  Component,
  Input,
  Output,
  OnInit,
  OnDestroy,
  AfterContentInit,
  ContentChildren,
  ElementRef,
  TemplateRef,
  QueryList,
  EventEmitter
} from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  Subject,
  combineLatest
} from 'rxjs';
import { NgxStrapTabDirective } from './tab.directive';
import { NgxStrapTabTitleDirective } from './tab-title.directive';


declare const jQuery: any;

export interface TabInfo {
  tabId: string;
  tabTemplate: TemplateRef<any>;
  title: string;
  titleTemplate: TemplateRef<any>;
  initiallyActive: boolean;
}

@Component({
  selector: 'ngx-strap-tabs',
  exportAs: 'ngxStrapTabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class NgxStrapTabsComponent implements OnInit, AfterContentInit, OnDestroy {
  static componentCount = 0;
  @ContentChildren(NgxStrapTabDirective) tabDirectives: QueryList<NgxStrapTabDirective>;
  @ContentChildren(NgxStrapTabTitleDirective) tabTitleDirectives: QueryList<NgxStrapTabTitleDirective>;
  @Input() type = 'tabs';
  @Input() fade = true;



  private _events$: Subject<Event> = new Subject();
  private _shown$: BehaviorSubject<string> = new BehaviorSubject(null);


  tabs: TabInfo[] = [];
  initialized = false;
  componentId: string;
  constructor(
    private elementRef: ElementRef
  ) { }

  get shown():  Observable<string> {
    return this._shown$.asObservable();
  }
  get events():  Observable<Event> {
    return this._events$.asObservable();
  }

  ngOnInit() {
    NgxStrapTabsComponent.componentCount ++;
    this.componentId = 'ngx-strap-tabs-' + NgxStrapTabsComponent.componentCount;
    jQuery(this.elementRef.nativeElement).on(
      'show.bs.tab shown.bs.tab hide.bs.tab hidden.bs.tab',
      this.handleEvent.bind(this)
    );

  }


  ngAfterContentInit() {
    combineLatest(this.tabDirectives.changes, this.tabTitleDirectives.changes).subscribe(this.updateTabs.bind(this));
    this.updateTabs();
  }

  ngOnDestroy() {
    jQuery(this.elementRef.nativeElement).off('show.bs.tab shown.bs.tab hide.bs.tab hidden.bs.tab');
  }

  updateTabs() {

    this.tabs = this.tabDirectives.map((tabDirective: NgxStrapTabDirective, i: number) => {
      const titleDirective = this.tabTitleDirectives.find((title: NgxStrapTabTitleDirective) => {
        return tabDirective.tabId === title.tabId;
      });
      const titleAsString = tabDirective.tabTitle || `Tab #${i}`;
      return {
        tabId: tabDirective.tabId,
        tabTemplate: tabDirective.templateRef,
        titleTemplate: titleDirective ? titleDirective.templateRef : null,
        title: titleAsString,
        initiallyActive: tabDirective.active === true,
      };
    });


    if (! this.initialized) {
      this.initialized = true;
      const active = this.tabs.find((entry: TabInfo) => entry.initiallyActive) || this.tabs[0];
      if (active) {
        this.show(active.tabId);
      }
    }

  }

  show(tabId, event?: Event) {
    if (event) {
      event.preventDefault();
    }
    setTimeout(( ) => {
      jQuery('#' + this.linkIdFromTabId(tabId), this.elementRef.nativeElement).tab('show');
    });

  }

  handleEvent(event: Event) {
    this._events$.next(event);
    const id = this.tabIdFromLinkId((event.target as any).id);
    switch (event.type) {
      case 'shown':
        this._shown$.next(id);
        break;
      case 'hidden':
        this._shown$.next(null);
        break;
    }
  }

  linkIdFromTabId(tabId: string) {
    return `${this.componentId}-${tabId}-link`;
  }
  tabIdFromLinkId(linkId: string): string {
    return linkId.replace(this.componentId + '-', '').replace(/\-link$/, '');
  }
  paneIdFromTabId(tabId: string) {
    return `${this.componentId}-${tabId}-pane`;
  }

}
