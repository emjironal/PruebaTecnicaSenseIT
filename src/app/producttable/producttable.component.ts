import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { Product } from '../interfaces/product'
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-producttable',
  templateUrl: './producttable.component.html',
  styleUrls: ['./producttable.component.css']
}) //end Component
export class ProducttableComponent implements OnInit
{
  displayedColumns: string[] = ['productId', 'unitPrice', 'quantity', 'discount']
  @Input() product: Product[]
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator
  @ViewChild(MatSort, {static: true}) sort: MatSort
  dataSource: MatTableDataSource<Product>

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Product>(this.product)
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
  }
} //end ProducttableComponent
