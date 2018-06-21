import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[ngxStrapTab]'
})
export class NgxStrapTabDirective  {
  @Input() tabId: string;
  @Input() tabTitle: string;
  @Input() active = false;
  constructor(
    public templateRef: TemplateRef<any>
  ) { }


}
