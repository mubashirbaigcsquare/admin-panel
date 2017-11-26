import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss'],
  animations: [routerTransition()]
})
export class TerminalComponent implements OnInit {
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
    // this.userForm = new FormGroup({
    //   'username': new FormControl(null, Validators.required),
    //   'email': new FormControl(null, [Validators.required, Validators.email]),
    //   'fullname': new FormControl(null, Validators.required),
    //   'mobile': new FormControl(null, Validators.required),
    //   'role': new FormControl(null, Validators.required)
    // })
  }

  onSubmit() {
    console.log(this.userForm)
  }

}
