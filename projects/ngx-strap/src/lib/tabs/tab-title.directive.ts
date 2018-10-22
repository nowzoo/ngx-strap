import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ngxStrapTabTitle]'
})
export class NgxStrapTabTitleDirective {
  @Input() tabId: string;
  constructor(
    public templateRef: TemplateRef<any>
  ) { }
}
