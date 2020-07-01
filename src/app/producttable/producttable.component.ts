import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../interfaces/product'

@Component({
  selector: 'app-producttable',
  templateUrl: './producttable.component.html',
  styleUrls: ['./producttable.component.css']
}) //end Component
export class ProducttableComponent implements OnInit
{
  displayedColumns: string[] = ['productId', 'unitPrice', 'quantity', 'discount']
  @Input() dataSource: Product[]

  constructor() { }

  ngOnInit(): void {
  }
} //end ProducttableComponent
