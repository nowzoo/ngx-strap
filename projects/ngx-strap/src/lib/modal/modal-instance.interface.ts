import { EventEmitter } from '@angular/core';

export interface IModalInstance {
  events: EventEmitter<Event>;
  shown: Promise<void>;
  hidden: Promise<void>;
  hide: () => void;
  handleUpdate: () => void;
}
