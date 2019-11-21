import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bal-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.css']
})
export class MovementsComponent implements OnInit {
  movimientos = [
    {
      id: 0,
      concepto: 'Pago de curso',
      cantidad: 1,
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
  constructor() { }

  ngOnInit() {
  }

}
