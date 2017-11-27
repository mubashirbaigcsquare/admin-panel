import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  success = ""
  formFilled = false
  ngOnInit(): void {
    this.formInit()
  }
    closeResult: string;
    userForm: FormGroup
    constructor(private modalService: NgbModal) { }

    open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
            console.log(this.closeResult)
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            console.log(this.closeResult)
        });
    }

    formInit() {
      this.userForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email])
      })
    }

    onSubmit() {
      console.log(this.userForm)
      this.success = 'a'
      this.formFilled = true
    }
  

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }
}
