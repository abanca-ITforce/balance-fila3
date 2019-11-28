import { Component, OnInit } from '@angular/core';
import { MovementsService } from '../movements.service';

@Component({
  selector: 'bal-new-movement',
  templateUrl: './new-movement.component.html',
  styleUrls: ['./new-movement.component.css']
})
export class NewMovementComponent implements OnInit {

  constructor(private movementsService: MovementsService) { }

  ngOnInit() {
  }

  postTask(event: any) {
    // this.movementsService.postMovement(event);
    this.movementsService.postTransaction(event);
  }

}
