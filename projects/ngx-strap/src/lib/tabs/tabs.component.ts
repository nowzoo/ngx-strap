import { Component, Input, Output, OnInit, AfterContentInit,
  ContentChildren, ElementRef, TemplateRef, QueryList, EventEmitter } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
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
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class NgxStrapTabsComponent implements OnInit, AfterContentInit {
  @ContentChildren(NgxStrapTabDirective) tabDirectives: QueryList<NgxStrapTabDirective>;
  @ContentChildren(NgxStrapTabTitleDirective) tabTitleDirectives: QueryList<NgxStrapTabTitleDirective>;
  @Input() type = 'tabs';
  @Input() fade = true;
  @Output() events: EventEmitter<Event> = new EventEmitter();
  @Output() shownTab: EventEmitter<string> = new EventEmitter();

  tabs: TabInfo[] = [];
  initialized = false;
  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    jQuery(this.elementRef.nativeElement).on(
      'show.bs.tab	shown.bs.tab hide.bs.tab hidden.bs.tab', this.handleEvent.bind(this));

  }


  ngAfterContentInit() {
    combineLatest(this.tabDirectives.changes, this.tabTitleDirectives.changes).subscribe(this.updateTabs.bind(this));
    this.updateTabs();
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
        initiallyActive: tabDirective.active === true
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
      jQuery('#' + tabId + '-tab', this.elementRef.nativeElement).tab('show');
    });

  }

  handleEvent(event: Event) {
    this.events.emit(event);
    const id = (event.target as any).id.replace(/\-tab$/, '');
    switch (event.type) {
      case 'shown':
        this.shownTab.emit(id);
        break;
      case 'hidden':
        this.shownTab.emit(null);
        break;
    }
  }

}
