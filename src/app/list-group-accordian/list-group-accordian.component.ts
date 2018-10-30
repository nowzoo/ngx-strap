import { Component, OnInit, OnDestroy, ElementRef, NgZone } from '@angular/core';
import { CollapsibleListComponent, CollapsibleListItemInfo } from '@nowzoo/ngx-strap';
declare const jQuery: any;
@Component({
  selector: 'ngx-strap-list-group-accordian',
  templateUrl: './list-group-accordian.component.html',
  styleUrls: ['./list-group-accordian.component.scss']
})
export class ListGroupAccordianComponent extends CollapsibleListComponent implements OnInit, OnDestroy {
  listener: any = null;
  selected = -1;
  itemStatus: {[i: number]: string} = {};
  constructor(
    private _elementRef: ElementRef,
    private _ngZone: NgZone
  ) {
    super();
  }

  get $el(): any {
    return jQuery(this._elementRef.nativeElement);
  }

  ngOnInit() {
    super.ngOnInit();

    this.listener = (event: any) => {

      this._ngZone.run(() => {
        const i = this.items.findIndex((value: CollapsibleListItemInfo) => {
          return (event.target as any).id === value.paneId;
        });
        this.itemStatus[i] = event.type;
        console.log(event.type, this.itemStatus);
      });

    };
    this.$el.on('show.bs.collapse shown.bs.collapse hide.bs.collapse hidden.bs.collapse', this.listener);
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    this.$el.off('show.bs.collapse shown.bs.collapse hide.bs.collapse hidden.bs.collapse', this.listener);
  }
}
