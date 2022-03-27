import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { PlanetsService } from '@app/services/planets.service';
import { Observable } from 'rxjs';

@Injectable()
export class planetIdResolver implements Resolve<any> {

  private routeId: number | null = null;

  constructor(private planetsService: PlanetsService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> | boolean {
    this.routeId = Number(route.paramMap.get('id')) || null;
    return this.routeId ? this.planetsService.getPlanet(this.routeId) : false;
  }
}