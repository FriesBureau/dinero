import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsComponent } from '@app/planets/planets.component';
import { SharedModule } from '@app/shared/shared.module';
import { PlanetsRoutingModule } from '@app/planets/planets-routing.module';

@NgModule({
  declarations: [PlanetsComponent],
  imports: [
    CommonModule,
    SharedModule,
    PlanetsRoutingModule
  ]
})
export class PlanetsModule { }
