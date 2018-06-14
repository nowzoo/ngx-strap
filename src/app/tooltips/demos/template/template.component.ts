import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit, OnDestroy {
  interval: any;
  adjective: string;
  constructor() { }

  ngOnInit() {
    this.adjective = 'fancy';
    this.interval = setInterval(() => {
      this.adjective = 'fancy' === this.adjective ? 'posh' : 'fancy';
    }, 500);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

}
