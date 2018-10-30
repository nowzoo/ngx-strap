import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsService } from './events.service';
import { EventsDirective } from './events.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EventsDirective],
  exports: [EventsDirective],
  providers: [EventsService]
})
export class NgxStrapEventsModule { }
