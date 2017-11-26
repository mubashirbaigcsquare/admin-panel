import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-terminals-list',
  templateUrl: './terminals-list.component.html',
  styleUrls: ['./terminals-list.component.scss'],
  animations: [routerTransition()]
})
export class TerminalsListComponent implements OnInit {

  searchTerm: string = ''

  public terminals = [
    { 
      terminalId: 1, 
      terminalName: "usernamey", 
      ipAddress: "fullname", 
      macAddress: "email7@email.com", 
      keepAliveTimer: "20",
      branchName: "Lucky One",
      status: "Active"
    },
    { 
      terminalId: 2, 
      terminalName: "usernamey", 
      ipAddress: "fullname", 
      macAddress: "email9@email.com", 
      keepAliveTimer: "20",
      branchName: "Lucky One",
      status: "In-Active"
    },
    { 
      terminalId: 3, 
      terminalName: "usernamey", 
      ipAddress: "fullname", 
      macAddress: "email8@email.com", 
      keepAliveTimer: "20",
      branchName: "Lucky One",
      status: "In-Active"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  clearSearch() {
    this.searchTerm = ''
  }

}
