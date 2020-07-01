import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { JsonClient } from '../interfaces/jsonclient';
import { Client } from '../interfaces/client';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
}) //end Injectable
export class ClientService
{
  public clientList: Client[] = []
  private urlClients = 'http://northwind.netcore.io/query/customers.json'
  
  constructor(
    private httpClient: HttpClient
  ) { }

  getJsonClients(): Observable<JsonClient>
  {
    return this.httpClient.get<JsonClient>(this.urlClients, {responseType: 'json'})
  } //end JsonClients
} //end ClientService
