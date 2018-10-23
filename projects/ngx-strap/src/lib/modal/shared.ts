import { EventEmitter } from '@angular/core';


export interface IModalInstance {
  events: EventEmitter<Event>;
  hide: () => Promise<void>;
  handleUpdate: () => void;
  shown: Promise<void>;
  hidden: Promise<void>;
}

export interface IModalOptions {
  dismissOnRouteChange?: boolean;
}
