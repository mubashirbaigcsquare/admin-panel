import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.scss'],
  animations: [routerTransition()]
})
export class MonitoringComponent implements OnInit {

  value='true'
  onText='Active'
  offText='In-Active'
  onColor="green"
  offColor="red"
  size='normal'
  disabled = 'false'
  constructor() { }

  ngOnInit() {
  }

  onFlagChange(temp: any) {
    console.log(temp)
  }

}
