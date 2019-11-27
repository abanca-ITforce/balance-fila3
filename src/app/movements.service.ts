import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovementsService {

  constructor() { }

  movements = [];

  postMovement(movement) {
    this.movements.push(movement);
    // console.log(this.movements);
  }

  getMovement(id: number) {
    return this.movements[id];
  }
}
