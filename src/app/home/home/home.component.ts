import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bal-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  totalIngresos = 4559;
  totalGastos = 3478;

  constructor() { }

  ngOnInit() {
  }

}
