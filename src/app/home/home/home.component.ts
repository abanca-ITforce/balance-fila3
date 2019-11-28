import { Component, OnInit } from '@angular/core';
import { MovementsService } from 'src/app/movements.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'bal-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movements: any[] = [];
  total: number;

  movements$: Observable<any[]>;

  constructor(private movementsService: MovementsService) {
    this.movements = this.movementsService.movements;
    this.movementsService.getAllMovements().subscribe({
      next: data => this.movements = data,
      complete: () => {
        this.total = this.movements.length;
        console.log(this.movements);
      }
    });
    // this.movements$ = this.movementsService.getAllMovements();
  }

  ngOnInit() {
  }

}
