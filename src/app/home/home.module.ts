import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MatListModule } from '@angular/material/list';
import {MatBadgeModule} from '@angular/material/badge';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatBadgeModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
