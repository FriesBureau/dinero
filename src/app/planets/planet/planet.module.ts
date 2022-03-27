import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetComponent } from '@app/planets/planet/planet.component';
import { SharedModule } from '@app/shared/shared.module';
import { PlanetRoutingModule } from '@app/planets/planet/planet-routing.module';

@NgModule({
  declarations: [PlanetComponent],
  imports: [
    CommonModule,
    SharedModule,
    PlanetRoutingModule
  ]
})
export class PlanetModule { }
