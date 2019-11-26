import { Component, OnInit } from '@angular/core';
import { MovementsService } from 'src/app/movements.service';

@Component({
  selector: 'bal-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /* totalIngresos = 4559;
  totalGastos = 3478; */
  movements = [];
  total: number;

  constructor(private movementsService: MovementsService) {
    this.movements = this.movementsService.movements;
    this.total = this.movements.length;
  }

  ngOnInit() {
  }

}
