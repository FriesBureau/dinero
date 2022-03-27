import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetsComponent } from '@app/planets/planets.component';

const routes: Routes = [
  {
    path: 'planets',
    pathMatch: 'full',
    component: PlanetsComponent
  },
  {
    path: '',
    redirectTo: 'planets',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
