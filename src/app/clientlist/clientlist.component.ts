import { Component, OnInit } from '@angular/core';
import { Client } from '../interfaces/client';
import { JsonClient } from '../interfaces/jsonclient';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.css'],
  providers: [ClientService]
}) //end Component
export class ClientlistComponent implements OnInit
{
  clientList: Client[];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.getJsonClients().subscribe((data: JsonClient) =>
    {
      this.clientList = data.results
    }) //end ngOnInit
  }

} //end ClientlistComponent