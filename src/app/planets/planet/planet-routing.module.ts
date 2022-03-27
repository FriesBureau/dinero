import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetComponent } from '@app/planets/planet/planet.component';
import { planetIdResolver } from '@app/planets/planet/planetidresolver';

const routes: Routes = [
  {
    path: ':id', component: PlanetComponent,
    resolve: {
      planetIdResolver: planetIdResolver,
    },
  },
  {
    path: '**',
    component: PlanetComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],

  exports: [RouterModule],
  providers: [
  ]
})
export class PlanetRoutingModule { }
