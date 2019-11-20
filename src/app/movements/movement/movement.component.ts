import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bal-movement',
  templateUrl: './movement.component.html',
  styleUrls: ['./movement.component.css']
})
export class MovementComponent implements OnInit {

  movementDescription: string;

  constructor(activatedRoute: ActivatedRoute) {
    this.movementDescription = activatedRoute.snapshot.params.id;
   }

  ngOnInit() {
  }

}
