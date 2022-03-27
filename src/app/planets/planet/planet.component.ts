import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Planet } from '@app/models/planet.model';
import { PlanetsService } from '@app/services/planets.service';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PlanetComponent implements OnInit {

  public planetData: Planet | any;

  constructor(public planetsService: PlanetsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.planetData = data ? data['planetIdResolver'] : [];
    })
  }

  formatData(data: string): string {
    return data?.charAt(0).toUpperCase() + data?.slice(1).toLowerCase();
  }
}
