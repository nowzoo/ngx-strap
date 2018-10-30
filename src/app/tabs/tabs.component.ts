import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  tabsEvents: string[] = [];
  tabShown: number = null;

  eventsDemoLastEvent: any = null;

  constructor(
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Tabs | @nowzoo/ngx-strap');
  }

  onTabsEvent(event) {
    console.log('onTabsEvent', event);
    this.tabsEvents.push(event.type);
    console.log(this.tabsEvents);
  }
  onTabShown(event) {
    this.tabShown = event;
  }

  onShownTab(event) {
    console.log('onTabShown', event);
  }



}
