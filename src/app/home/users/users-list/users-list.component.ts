import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  animations: [routerTransition()]
})
export class UsersListComponent implements OnInit {

  public users = [
    { userId: 1, username: "username", fullname: "fullname", email: "email@email.com", status: "Active"},
    { userId: 2, username: "username", fullname: "fullname", email: "email@email.com", status: "In-Active"},
    { userId: 3, username: "username", fullname: "fullname", email: "email@email.com", status: "In-Active"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
