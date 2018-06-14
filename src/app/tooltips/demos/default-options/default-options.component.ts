import { Component, OnInit } from '@angular/core';
import { NgxStrapTooltipOptions } from '@nowzoo/ngx-strap';

const myDefaults: NgxStrapTooltipOptions = {
  animation: false,
  template: `<div class="tooltip my-custom-tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>`
};

@Component({
  selector: 'app-default-options',
  templateUrl: './default-options.component.html',
  styleUrls: ['./default-options.component.scss'],
  providers: [{provide: NgxStrapTooltipOptions, useValue: myDefaults}]
})
export class DefaultOptionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
