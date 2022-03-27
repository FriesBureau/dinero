import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Planet } from '@app/models/planet.model';
import { PlanetsService } from '@app/services/planets.service'
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PlanetsComponent implements OnInit {

  @ViewChild(MatSort)
  sort!: MatSort;

  public displayedColumns: string[] = ['name', 'rotation_period', 'orbital_period', 'diameter', 'climate', 'gravity',
    'terrain', 'surface_water', 'population', 'residents', 'films', 'created', 'edited', 'url']

  public displayedHeader = ['Name', 'Rotation', 'Obital', 'Diameter', 'Climate', 'Gravity',
    'Terrain', 'Surface Water', 'Population', 'Residents', 'Films', 'Created', 'Edited', 'URL'];
  tableData: MatTableDataSource<Planet>;

  public pageSize?: number = 0;
  public pageLength?: number = 0;
  public pageSizeOptions: number[] = [5, 10, 25, 100];
  private nextPageUrl: string = "";
  private previousPageUrl: string = "";
  private changePageUrl: string = "";

  constructor(
    public planetsService: PlanetsService, private router: Router) {
    this.tableData = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.planetsService.getPlanets().subscribe(content => {
      this.tableData.data = content.results!;
      this.pageLength = content.count;
      this.pageSize = content.results?.length;
      this.nextPageUrl = content.next!;
      this.previousPageUrl = content.previous!;
      this.tableData.sort = this.sort;
    })
  }

  navigateId(rowNumber: number): void {
    this.router.navigateByUrl('planets/' + ++rowNumber);
  }

  changePageClick(event: PageEvent) {
    if (event.previousPageIndex && (event.previousPageIndex > event.pageIndex)) {
      this.changePageUrl = this.previousPageUrl;
    }
    else {
      this.changePageUrl = this.nextPageUrl;
    }

    this.planetsService.getPlanetChangePage(this.changePageUrl).subscribe(content => {
      this.tableData.data = content.results!;
      this.tableData.sort = this.sort;
      this.nextPageUrl = content.next!;
      this.previousPageUrl = content.previous!;
      this.pageLength = content.count;
      this.pageSize = content.results?.length;
    })
  }

  isArray(data: string | string[]) {
    const items = [];
    if (data instanceof Array) {
      return data.map(x => x).join(", ");
    }
    else {
      return data;
    }
  }
}