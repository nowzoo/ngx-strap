import { Component, OnInit, ContentChild, AfterContentInit, OnChanges,  ViewChild, Input, TemplateRef } from '@angular/core';
@Component({
  selector: 'ngx-strap-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit, AfterContentInit, OnChanges {
  @ContentChild('ngxStrapTabTitle') tabTitleTemplateRef: TemplateRef<any>;
  @ViewChild('titleTemplate') titleTemplateRef: TemplateRef<any>;
  @ViewChild('contentTemplate') contentTemplateRef: TemplateRef<any>;
  @Input() tabTitle = 'Untitled';
  @Input() tabDisabled = false;


  constructor() { }

  ngOnInit() {
    // console.log('OnInit');
  }

  ngOnChanges() {
  //  console.log('OnChanges', this.tabTitleTemplateRef);
  }

  ngAfterContentInit() {
    // console.log('AfterContentInit');
  }

}
