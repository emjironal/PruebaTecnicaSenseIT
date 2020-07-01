import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { JsonOrder } from '../interfaces/jsonorder';
import { Order } from '../interfaces/order';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
}) //end Injectable
export class OrderService
{
  public orderList: Order[] = []
  private urlOrders = 'http://northwind.netcore.io/orders.json'
  
  constructor(
    private httpClient: HttpClient
  ) { }

  getJsonOrders(): Observable<JsonOrder>
  {
    return this.httpClient.get<JsonOrder>(this.urlOrders, {responseType: 'json'})
  } //end getJsonOrders
} //end OrderService
