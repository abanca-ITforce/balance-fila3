import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bal-movement',
  templateUrl: './movement.component.html',
  styleUrls: ['./movement.component.css']
})
export class MovementComponent implements OnInit {

  movimiento;

  movementDescription: string;
  movimientos = [
    {
      id: 0,
      concepto: 'Pago de curso',
      cantidad: 100,
      tipo: 'gasto'
    },
    {
      id: 1,
      concepto: 'Arreglar bicicleta',
      cantidad: 89,
      tipo: 'gasto'
    },
    {
      id: 2,
      concepto: 'Contrato Abanca',
      cantidad: 2500,
      tipo: 'ingreso'
    },
    {
      id: 3,
      concepto: 'Participaciones Banco Santander',
      cantidad: 9000,
      tipo: 'ingreso'
    }
  ];

  constructor(activatedRoute: ActivatedRoute) {
    // this.movementDescription = activatedRoute.snapshot.params.id;
    this.movimiento = this.movimientos[activatedRoute.snapshot.params.id];
   }

  ngOnInit() {
  }

}
