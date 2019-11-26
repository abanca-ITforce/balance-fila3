import { Component, OnInit } from '@angular/core';
import { MovementsService } from '../movements.service';

@Component({
  selector: 'bal-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.css']
})
export class MovementsComponent implements OnInit {
  movements = this.movementsService.movements;

  constructor(private movementsService: MovementsService) { }

  ngOnInit() {
  }

}
