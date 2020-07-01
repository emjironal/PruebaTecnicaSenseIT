import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../interfaces/order';

@Component({
  selector: 'app-orderdetail',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.css']
}) //end Component
export class OrderdetailComponent implements OnInit
{
  @Input() order: Order

  constructor() { }

  ngOnInit(): void {
  }
} //end OrderdetailComponent
