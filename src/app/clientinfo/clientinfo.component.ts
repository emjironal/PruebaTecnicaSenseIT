import { Component, OnInit } from '@angular/core';

import { Client } from '../client'

@Component({
  selector: 'app-clientinfo',
  templateUrl: './clientinfo.component.html',
  styleUrls: ['./clientinfo.component.css']
})
export class ClientinfoComponent implements OnInit {

  clients: Client[]

  constructor() { }

  ngOnInit(): void {
  }

}
