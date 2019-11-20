import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  { path: 'new-movement', loadChildren: () => import('./new-movement/new-movement.module').then(m => m.NewMovementModule) },
  { path: 'movements', loadChildren: () => import('./movements/movements.module').then(m => m.MovementsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
