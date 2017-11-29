import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

import { TerminalService } from './../../../shared/services/terminal.service';

@Component({
  selector: 'app-terminals-list',
  templateUrl: './terminals-list.component.html',
  styleUrls: ['./terminals-list.component.scss'],
  animations: [routerTransition()]
})
export class TerminalsListComponent implements OnInit {

  searchTerm = ''
  display = true
  userErrorMessage = ''
  terminals = []

  constructor(private terminalsService: TerminalService) { }

  ngOnInit() {
    this.terminalsService.getTerminals()
      .first() // only gets fired once
      .subscribe((data) => {
        this.terminals = data.TerminalResponse;
        this.display = true;
        console.log('data.TerminalResponse')
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
