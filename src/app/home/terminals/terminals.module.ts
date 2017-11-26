import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TerminalsComponent } from './terminals.component';
import { TerminalsListComponent } from './terminals-list/terminals-list.component';
import { TerminalComponent } from './terminal/terminal.component';
import { PageHeaderModule } from './../../shared/modules/page-header/page-header.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TerminalsRoutingModule } from './terminals-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
    imports: [
        CommonModule,
        TerminalsRoutingModule,
        PageHeaderModule,
        FormsModule,
        Ng2SearchPipeModule,
        ReactiveFormsModule
    ],
    declarations: [
        TerminalComponent,
        TerminalsListComponent,
        TerminalsComponent
    ]
})
export class TerminalsModule {}