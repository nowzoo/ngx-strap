import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TooltipDirective } from '@nowzoo/ngx-strap';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit, OnDestroy, AfterViewInit {
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  @ViewChild('tooltipped') tooltipped: TooltipDirective;
  events: string[] = [];
  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.tooltipped.events
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(e => {
        this.events.push(e.type);
        console.log(e);
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
