// import { HttpModule } from '@angular/http';
import { BootstrapSwitchModule } from 'angular2-bootstrap-switch';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadingModule } from 'ngx-loading';

import { MonitoringRoutingModule } from './monitoring-routing.module';
import { PageHeaderModule } from './../../shared/modules/page-header/page-header.module';
import { MonitoringComponent } from './monitoring.component';
import { PipeModule } from '../../shared/pipes/pipes.module';

@NgModule({
    declarations: [MonitoringComponent],
    imports: [
        CommonModule,
        MonitoringRoutingModule,
        PageHeaderModule,
        LoadingModule,
        PipeModule,
        // HttpModule,
        BootstrapSwitchModule.forRoot(),
    ]
})
export class MonitoringModule {}