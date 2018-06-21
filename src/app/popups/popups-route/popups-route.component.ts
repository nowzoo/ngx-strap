import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgxHighlightJsService } from '@nowzoo/ngx-highlight-js';

@Component({
  selector: 'app-popups-route',
  templateUrl: './popups-route.component.html',
  styleUrls: ['./popups-route.component.scss']
})
export class PopupsRouteComponent implements OnInit {

  constructor(
    private title: Title,
    private hl: NgxHighlightJsService
  ) { }

  ngOnInit() {
    this.title.setTitle('Tooltips & Popovers | NgxStrap');
    this.hl.loadTheme('dracula').then(() => {
      console.log(this.hl.currentTheme);
    });
  }

}
