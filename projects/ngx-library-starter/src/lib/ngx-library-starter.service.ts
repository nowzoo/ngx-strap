import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgxLibraryStarterService {

  get hello(): string {
    return this._hello;
  }
  set hello(name: string) {
    this._hello = name;
  }
  private _hello = 'World';
  constructor() { }
}
