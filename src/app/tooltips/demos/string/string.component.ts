import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-string',
  templateUrl: './string.component.html',
  styleUrls: ['./string.component.scss']
})
export class StringComponent implements OnInit {
  fc: FormControl;
  constructor() { }

  ngOnInit() {
    this.fc = new FormControl('Hello World');
  }

}
