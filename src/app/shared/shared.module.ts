import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatCardModule, MatTableModule, MatSortModule, MatPaginatorModule, MatTooltipModule
  ],
  exports: [
    CommonModule, MatCardModule, MatTableModule, MatSortModule, MatPaginatorModule, MatTooltipModule
  ]
})
export class SharedModule { }
