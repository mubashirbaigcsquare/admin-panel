import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  animations: [routerTransition()]
})
export class UsersListComponent implements OnInit {

  searchTerm: string = ''
  
  public users = [
    { userId: 1, username: "usernamey", fullname: "fullname", email: "email7@email.com", status: "Active"},
    { userId: 2, username: "usernamek", fullname: "fullname", email: "email6@email.com", status: "In-Active"},
    { userId: 3, username: "usernamet", fullname: "fullname", email: "email5@email.com", status: "In-Active"}
  ]


  constructor() { }

  ngOnInit() {
  }

  clearSearch() {
    this.searchTerm = ''
  }

}
