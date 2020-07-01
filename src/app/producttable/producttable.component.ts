import { Component, OnInit } from '@angular/core';

import { Product } from '../interfaces/product'

@Component({
  selector: 'app-producttable',
  templateUrl: './producttable.component.html',
  styleUrls: ['./producttable.component.css']
})
export class ProducttableComponent implements OnInit {

  displayedColumns: string[] = ['productId', 'unitPrice', 'quantity', 'discount']
  dataSource: Product[] = [{productId: 16, unitPrice: 17.45, quantity: 14, discount: 0.05}]

  constructor() { }

  ngOnInit(): void {
  }

}
