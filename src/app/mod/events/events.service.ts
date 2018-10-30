import { Injectable, NgZone, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(
    private _ngZone: NgZone
  ) { }

  get ngZone(): NgZone {
    return this._ngZone;
  }

  getEventTypes(componentType: string) {
    return ['show', 'inserted', 'shown', 'hide', 'hidden'].map(s => `${s}.bs.${componentType}`);
  }

  on($el: any, componentType: string, events: EventEmitter<Event>): (event: Event) => void {
    const eventTypes = this.getEventTypes(componentType);
    const listener = (event: Event) => {
      this.ngZone.run(() => {
        events.emit(event);
      });
    };
    $el.on(eventTypes.join(' '), listener);
    return listener;
  }
}
