import { Component, ContentChild,  ViewChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'ngx-strap-accordian-item',
  templateUrl: './accordian-item.component.html',
  styleUrls: ['./accordian-item.component.css']
})
export class AccordianItemComponent {
  @ContentChild('itemTitleTemplate') itemTitleTemplate: TemplateRef<any>;
  @ViewChild('titleTemplate') titleTemplate: TemplateRef<any>;
  @ViewChild('contentTemplate') contentTemplate: TemplateRef<any>;
  @Input() itemTitle = 'Untitled Item';
}
