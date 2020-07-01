import { Component, OnInit } from '@angular/core';
import { Client } from '../interfaces/client';
import { JsonClient } from '../interfaces/jsonclient';
import { JsonOrder } from '../interfaces/jsonorder';
import { ClientService } from '../services/client.service';
import { OrderService } from '../services/order.service';
import { Order } from '../interfaces/order';

@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.css'],
  providers: [ClientService, OrderService]
}) //end Component
export class ClientlistComponent implements OnInit
{
  clientList: Client[];

  constructor(private clientService: ClientService, private orderService: OrderService) { }

  ngOnInit(): void
  {
    if(this.clientService.clientList.length == 0)
    {
      this.clientService.getJsonClients().subscribe((data: JsonClient) =>
      {
        this.clientList = data.results
        this.sortClientList()
        this.clientService.clientList = this.clientList
      }) //end ngOnInit
    } //end if
    else
    {
      this.clientList = this.clientService.clientList
    } //end else
  } //end ngOnInit

  sortClientList(): void
  {
    if(this.orderService.orderList.length == 0)
    {  
      this.orderService.getJsonOrders().subscribe((data: JsonOrder) =>
      {
        this.orderService.orderList = data.results
        this.sortClientListAux(data.results)
      }) //end subscribe
    } //end if
    else
    {
      this.sortClientListAux(this.orderService.orderList)
    } //end else
  }

  sortClientListAux(orderList: Order[]): void
  {
    this.clientList.forEach(client =>
    {
      client.clientDetails = this.getClientDetails(client, orderList)
    }) //end forEach
    this.clientList.sort((client1: Client, client2: Client) =>
    {
      return client2.clientDetails.length - client1.clientDetails.length
    }) //end sort
  } //end sortClientList

  getClientDetails(client: Client, orderList: Order[]): Order[]
  {
    var details = []
    orderList.forEach((order) =>
    {
      if(order.order.customerId == client.id)
      {
        order.order.orderDate = this.parseDateJson(order.order.orderDate)
        order.order.requiredDate = this.parseDateJson(order.order.requiredDate)
        if(order.order.shippedDate)
        {
          order.order.shippedDate = this.parseDateJson(order.order.shippedDate)
        } //end if
        details.push(order)
      } //end if
    }) //end forEach
    return details
  } //end getClientDetails

  private parseDateJson(dateJson: string): string
  {
    return (new Date(parseInt(dateJson.substr(6)))).toDateString()
  } //end parseDateJson

} //end ClientlistComponent