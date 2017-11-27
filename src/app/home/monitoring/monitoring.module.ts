import { BootstrapSwitchModule } from 'angular2-bootstrap-switch';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MonitoringRoutingModule } from './monitoring-routing.module';
import { PageHeaderModule } from './../../shared/modules/page-header/page-header.module';
import { MonitoringComponent } from './monitoring.component';

@NgModule({
    declarations: [MonitoringComponent],
    imports: [
        CommonModule,
        MonitoringRoutingModule,
        PageHeaderModule,
        BootstrapSwitchModule.forRoot(),
    ]
})
export class MonitoringModule {}