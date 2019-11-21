import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovementsRoutingModule } from './movements-routing.module';
import { MovementsComponent } from './movements.component';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [MovementsComponent],
  imports: [
    CommonModule,
    MovementsRoutingModule,
    MatListModule
  ]
})
export class MovementsModule { }
