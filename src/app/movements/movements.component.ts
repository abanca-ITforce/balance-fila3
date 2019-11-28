import { Component, OnInit } from '@angular/core';
import { MovementsService } from '../movements.service';

@Component({
  selector: 'bal-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.css']
})
export class MovementsComponent implements OnInit {
  // movements = this.movementsService.movements;
  movements: any[] = [];

  constructor(private movementsService: MovementsService) {
    this.movementsService.getAllMovements().subscribe(data => this.movements = data);

    console.log('..');
    console.log(this.movements);
  }

  ngOnInit() {
  }

}
