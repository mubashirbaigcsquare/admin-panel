import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TerminalsRoutingModule } from './terminals-routing.module';
import { PageHeaderModule } from './../../shared/modules/page-header/page-header.module';
import { PipeModule } from './../../shared/pipes/pipes.module';
import { TerminalsComponent } from './terminals.component';
import { TerminalsListComponent } from './terminals-list/terminals-list.component';
import { TerminalComponent } from './terminal/terminal.component';



@NgModule({
    imports: [
        CommonModule,
        TerminalsRoutingModule,
        PageHeaderModule,
        FormsModule,
        Ng2SearchPipeModule,
        ReactiveFormsModule,
        PipeModule,
        NgbModule.forRoot()
    ],
    declarations: [
        TerminalComponent,
        TerminalsListComponent,
        TerminalsComponent
    ]
})
export class TerminalsModule {}