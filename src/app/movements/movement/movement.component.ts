import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovementsService } from 'src/app/movements.service';

@Component({
  selector: 'bal-movement',
  templateUrl: './movement.component.html',
  styleUrls: ['./movement.component.css']
})
export class MovementComponent implements OnInit {
  movement;
  id;

  constructor(activatedRoute: ActivatedRoute,
              private movementsService: MovementsService) {
    this.id = activatedRoute.snapshot.params.id;
    this.movement = this.movementsService.getMovement(this.id);
   }

  ngOnInit() {
  }

}
