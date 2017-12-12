import { UrlSegment } from '@angular/router/src/url_tree';
import { Router, ActivatedRoute, Params, UrlMatcher } from '@angular/router';
import { Component, OnInit, group } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

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
  formControlArray:any

  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder) { 
    //this.createForm();
   }

   createForm() {
   
  }
  
  modelForm:FormGroup
  
  // items = [
  //   {key: 'Admin', value: 'Admin'},
  //   {key: 'Monitoring', value: 'Monitoring'}
  // ];
  // mapItems(items) {
  //   let selectedItems = items.filter((l) => l.checked).map((l) => l.key);
  //   return selectedItems.length ? selectedItems : null;
  // }
  ngOnInit() {

    // let group = [];
    
    // this.items.forEach((l) => {
    //   group.push(new FormGroup({
    //     key: new FormControl(l.key),
    //     value: new FormControl(l.value),
    //     checked: new FormControl(false),
    //   }));
    // });
    
    

    // //this.formInit()
    // //group.push(this.userForm)
    // let formControlArray = new FormArray(group);
    
    

    // this.modelForm = new FormGroup({
    //   items: formControlArray,
    //   selectedItems: new FormControl(this.mapItems(formControlArray.value), Validators.required)
    // });
    
    // this.userForm = this.fb.group({
    //   'user': this.fb.group({
    //     'username': new FormControl(null, Validators.required),
    //     'email': new FormControl(null, [Validators.required, Validators.email]),
    //     'fullname': new FormControl(null, Validators.required),
    //     'mobile': new FormControl(null, Validators.required),
    //   }),
    //   'role':  this.fb.group({
    //     items: formControlArray,
    //     selectedItems: new FormControl(this.mapItems(formControlArray.value), Validators.required)
    //   })
    // });

    // formControlArray.valueChanges.subscribe((v) => {
    //   this.modelForm.controls.selectedItems.setValue(this.mapItems(v));
    // });

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
    //   'user': this.fb.group({
    //     'username': new FormControl(null, Validators.required),
    //     'email': new FormControl(null, [Validators.required, Validators.email]),
    //     'fullname': new FormControl(null, Validators.required),
    //     'mobile': new FormControl(null, Validators.required),
    //   }),
    //   'role': new FormControl(null, Validators.required)
    // })
  }

  onSubmit() {
    console.log(this.userForm)
  }

}
