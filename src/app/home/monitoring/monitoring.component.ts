import { Component, OnInit, OnDestroy } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { MonitorService } from '../../shared/services/monitor.service';
import { Response } from '@angular/http'
import { TimerObservable } from 'rxjs/observable/TimerObservable';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.scss'],
  animations: [routerTransition()]
})
export class MonitoringComponent implements OnInit, OnDestroy {

  onText = 'Active'
  offText = 'In-Active'
  onColor = "green"
  offColor = "red"
  size = 'normal'

  display: boolean; // whether to display info in the component
  // use *ngIf="display" in your html to take
  // advantage of this
  loading = false;
  alive: boolean; // used to unsubscribe from the TimerObservable
  // when OnDestroy is called.
  interval: number;
  userErrorMessage: string = ''

  monitoringData: any[]

  constructor(private monitorService: MonitorService) {
    this.display = true;
    this.alive = true;
    this.interval = 10000;
  }

  ngOnInit() {
    this.loading = true;
    
    this.monitorService.getTerminalsWithDevices()
      .first() // only gets fired once
      .subscribe((data) => {
        this.monitoringData = data.MonitoringResponse;
        this.loading = false;
        this.display = true;
        console.log('data.MonitoringResponse')
      }, (error) => {
        console.log(error)
        this.userErrorMessage = error.ErrorResponse.userMessage
        this.display = false;
      });

    TimerObservable.create(10000, this.interval)
      .takeWhile(() => this.alive)
      .subscribe(() => {
        this.loading = true;
      
        this.monitorService.getTerminalsWithDevices()
          .subscribe(
          (data) => {
            this.loading = false;
            this.monitoringData = data.MonitoringResponse
            console.log('data.MonitoringResponse')
          },
          (error) => {
            console.log(error)
            this.userErrorMessage = error.ErrorResponse.userMessage
            this.display = false;
          }
          )
      })
  }

  getStyle(temp: any) {
    if (temp === '0') {
      return "btn btn-sm btn-success"
    } else if (temp === '1') {
      return "btn btn-sm btn-warning"
    } else if (temp === '2') {
      return "btn btn-sm btn-danger"
    }
  }

  ngOnDestroy() {
    this.alive = false; // switches your TimerObservable off
  }
}
