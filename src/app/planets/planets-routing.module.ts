import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetsComponent } from '@app/planets/planets.component';

const routes: Routes = [
  {
    path: '',
    component: PlanetsComponent
  },
  {
    path: ':id',
    loadChildren: () => import('./planet/planet.module').then(m => m.PlanetModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],

  exports: [RouterModule],
  providers: [
  ]
})
export class PlanetsRoutingModule { }
