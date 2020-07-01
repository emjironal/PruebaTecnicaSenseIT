import { Component, OnInit, Input } from '@angular/core';

import { Client } from '../interfaces/client'
import { ClientService } from '../services/client.service';
import { MatDialog } from '@angular/material/dialog';
import { ClientdetailComponent } from '../clientdetail/clientdetail.component';

@Component({
  selector: 'app-clientinfo',
  templateUrl: './clientinfo.component.html',
  styleUrls: ['./clientinfo.component.css']
}) //end Component
export class ClientinfoComponent implements OnInit
{
  @Input() client: Client

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openClientDetailsDialog()
  {
    this.dialog.open(ClientdetailComponent, {data: this.client})
  } //end openClientDetailsDialog
} //end ClientinfoComponent
