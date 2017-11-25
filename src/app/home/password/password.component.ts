import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
  animations: [routerTransition()]
})
export class PasswordComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // onSave() {
  //   this.router.navigate(['../'])
  // }

}
