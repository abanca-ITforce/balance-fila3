import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MovementsService {
  url = 'https://api-base.herokuapp.com/api/pub/transactions';

  constructor(private http: HttpClient) { }

  movements = [];

  getAllMovements() {
    /* this.http.get<any[]>(this.url).subscribe({
        data => console.log(data)
    }); */
    // this.http.get<any[]>(this.url).subscribe(data => console.log(data));
     return this.http.get<any[]>(this.url);
  }

  postMovement(movement) {
    this.movements.push(movement);
    // console.log(this.movements);
  }

  postTransaction(movement) {
    this.http.post(this.url, movement).subscribe();
  }

  getMovement(id: number) {
    return this.movements[id];
  }
}
