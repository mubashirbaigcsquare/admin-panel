import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IssuesLogsRoutingModule } from './issues-logs-routing.module';
import { CommonModule } from '@angular/common';
import { IssuesLogsComponent } from './issues-logs.component';
import { NgModule } from '@angular/core';
import { PageHeaderModule } from '../../shared/modules/index';
import { ModalComponent } from './modal/modal.component';

@NgModule({
    declarations: [IssuesLogsComponent, ModalComponent],
    imports: [
        CommonModule,
        IssuesLogsRoutingModule,
        PageHeaderModule,
        ReactiveFormsModule,
        FormsModule,
        NgbModule.forRoot(),
    ]
})
export class IssuesLogsModule {}