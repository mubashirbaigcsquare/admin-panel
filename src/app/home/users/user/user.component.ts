import { UrlSegment } from '@angular/router/src/url_tree';
import { Router, ActivatedRoute, Params, UrlMatcher } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  animations: [routerTransition()]
})
export class UserComponent implements OnInit {
  roles = ['Admin', 'Monitoring']
  closeResult: string;
  editMode = false;
  id: number;
  userForm: FormGroup
  //errors = []
  success = ""

  constructor(
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {

    this.formInit()

    // this.userForm.statusChanges.subscribe(
    //   (value) => {
    //     if(value=="INVALID") {
    //       if(this.userForm.get('mobile').touched && this.userForm.get('mobile').value==="") {
        
    //     }
    //   }
    //   }
    // )

    this.route.url
    .subscribe(
    (params: UrlSegment[]) => {
      if (params.length > 1) {
        this.editMode = true
      }
    });

    this.route.params
      .subscribe(
      (params: any) => {
        // console.log(params)
         this.id = +params['id'];
         if(this.editMode) {
          console.log(this.id)
         }
         
        // this.editMode = params['id'] != null;
        // this.initForm();
      });

   

      
  }
  
  formInit() {
    this.userForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'fullname': new FormControl(null, Validators.required),
      'mobile': new FormControl(null, Validators.required),
      'role': new FormControl(null, Validators.required)
    })
  }

  onSubmit() {
    console.log(this.userForm)
  }

}
