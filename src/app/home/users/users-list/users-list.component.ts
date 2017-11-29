import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  animations: [routerTransition()]
})
export class UsersListComponent implements OnInit {

  searchTerm = ''
  display = true
  userErrorMessage = ''
  users = []


  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
    .first() // only gets fired once
    .subscribe((data) => {
      this.users = data.UserResponse;
      this.display = true;
    }, (error) => {
      console.log(error)
      this.userErrorMessage = error.ErrorResponse.userMessage
      this.display = false;
    });
  }

  clearSearch() {
    this.searchTerm = ''
  }

}
