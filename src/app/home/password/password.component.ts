import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgForm } from '@angular/forms';
import { PasswordService } from '../../shared/services/password.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
  animations: [routerTransition()]
})
export class PasswordComponent implements OnInit {
  @ViewChild('f') changePasswordForm: NgForm
  success = ''
  password: string
  confirmPassword: string
  constructor(private router: Router, private passwordService: PasswordService) { }

  ngOnInit() {
    this.password = ''
    this.confirmPassword = ''
  }

  onSubmit() {
  
    console.log(this.changePasswordForm.form.status)
  }

}
