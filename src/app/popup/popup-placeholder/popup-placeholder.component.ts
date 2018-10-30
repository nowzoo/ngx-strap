import { Component, ViewChild, TemplateRef, ElementRef} from '@angular/core';

@Component({
  selector: 'app-popup-placeholder',
  templateUrl: './popup-placeholder.component.html',
  styleUrls: ['./popup-placeholder.component.scss']
})
export class PopupPlaceholderComponent {
  @ViewChild('defaultTemplate') defaultTemplate: TemplateRef<any>;
  @ViewChild('insertedContent') insertedContent: ElementRef;
  private _inserted: string | TemplateRef<any>;
  private _template: TemplateRef<any>;


  get inserted(): string | TemplateRef<any> {
    return this._inserted;
  }
  set inserted(inserted: string | TemplateRef<any>) {
    this._inserted = inserted;
    if (inserted instanceof TemplateRef) {
      this._template = inserted;
    } else {
      this._template = this.defaultTemplate;
    }
  }

  get template(): TemplateRef<any> {
    return this._template;
  }
}
