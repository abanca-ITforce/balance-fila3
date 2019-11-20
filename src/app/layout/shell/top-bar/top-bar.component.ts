import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bal-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  section = 'Balance';

  constructor() { }

  ngOnInit() {
  }

}
