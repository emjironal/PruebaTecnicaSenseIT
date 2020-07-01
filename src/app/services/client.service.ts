import { Injectable } from '@angular/core';
import { JsonClient } from '../interfaces/jsonclient';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private urlClients = 'http://northwind.netcore.io/query/customers.json'
  
  constructor(
    private httpClient: HttpClient
  ) { }

  getJsonClients(): Observable<JsonClient>
  {
    return this.httpClient.get<JsonClient>(this.urlClients, {responseType: 'json'})
  }
}
