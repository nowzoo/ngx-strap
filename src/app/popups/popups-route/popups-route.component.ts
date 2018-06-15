import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-popups-route',
  templateUrl: './popups-route.component.html',
  styleUrls: ['./popups-route.component.scss']
})
export class PopupsRouteComponent implements OnInit {

  constructor(
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Tooltips & Popovers | NgxStrap');
  }

}
