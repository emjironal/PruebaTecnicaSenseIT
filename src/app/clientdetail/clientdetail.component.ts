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
}) //end Component
export class ClientdetailComponent implements OnInit
{
  clientDetails: Order[] = []

  constructor(@Inject(MAT_DIALOG_DATA) public client: Client, private orderService: OrderService) { }

  ngOnInit(): void
  {
    this.setClientDetails(this.client.clientDetails)
  } //end ngOnInit

  setClientDetails(orderList: Order[]): void
  {
    orderList.forEach(order =>
    {
      if(order.order.customerId == this.client.id)
      {
        //Extracted from: https://stackoverflow.com/questions/22435212/angular-js-format-date-from-json-object
        order.order.orderDate = this.parseDateJson(order.order.orderDate)
        order.order.requiredDate = this.parseDateJson(order.order.requiredDate)
        if(order.order.shippedDate)
        {
          order.order.shippedDate = this.parseDateJson(order.order.shippedDate)
        }
        this.clientDetails.push(order)
      } //end if
    }) //end forEach
  }

  private parseDateJson(dateJson: string): string
  {
    return (new Date(parseInt(dateJson.substr(6)))).toDateString()
  } //end parseDateJson
}//end ClientdetailComponent
