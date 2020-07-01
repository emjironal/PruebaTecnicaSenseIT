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

  constructor(@Inject(MAT_DIALOG_DATA) public client: Client) { }

  ngOnInit(): void
  {
    this.clientDetails = this.client.clientDetails
  } //end ngOnInit
}//end ClientdetailComponent
