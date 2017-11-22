import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  animations: [routerTransition()]
})
export class UserComponent implements OnInit {
  roles = ['Admin', 'Monitoring']
  closeResult: string;
//   constructor(private modalService: NgbModal, public router: Router) { }

//   open(content) {
//     this.modalService.open(content).result.then((result) => {
//         this.closeResult = `Closed with: ${result}`;
//         this.router.navigate(['/users']);
//         console.log(`Closed with: ${result}`)
//     }, (reason) => {
//         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
//         this.router.navigate(['/users']);
//         console.log(`Dismissed ${this.getDismissReason(reason)}`)
//     });

    
// }

// private getDismissReason(reason: any): string {
//   if (reason === ModalDismissReasons.ESC) {
//     console.log('by pressing ESC')
//       return 'by pressing ESC';
//   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
//     console.log('by pressing backdrop')
//       return 'by clicking on a backdrop';
//   } else {
//     console.log(`with: ${reason}`)
//       return  `with: ${reason}`;
//   }
// }

  ngOnInit() {
  }

}
