import { Component, OnInit, Input, Inject } from '@angular/core';

import { Client } from '../interfaces/client';
import { Order } from '../interfaces/order';
import { OrderService } from '../services/order.service'

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { JsonOrder } from '../interfaces/jsonorder';

@Component({
  selector: 'app-clientdetail',
  templateUrl: './clientdetail.component.html',
  styleUrls: ['./clientdetail.component.css']
})
export class ClientdetailComponent implements OnInit
{
  clientDetails: Order[] = []

  constructor(@Inject(MAT_DIALOG_DATA) public client: Client, private orderService: OrderService) { }

  ngOnInit(): void {
    this.getOrders()
    console.log(this.clientDetails);
    
  } //end ngOnInit

  getOrders()
  {
    this.orderService.getJsonOrders().subscribe((data: JsonOrder) =>
    {
      data.results.forEach(order =>
      {
        if(order.order.customerId == this.client.id)
        {
          this.clientDetails.push(order)
        } //end if
      }) //end forEach
    }) //end subscribe
  } //end getOrders
}//end ClientdetailComponent
