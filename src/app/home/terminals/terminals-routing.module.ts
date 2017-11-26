import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { TerminalComponent } from './terminal/terminal.component';
import { TerminalsListComponent } from './terminals-list/terminals-list.component';
import { TerminalsComponent } from './terminals.component';

const routes: Routes = [
    { 
        path: "", 
        component: TerminalsComponent, 
        children: [
            { path: "", component: TerminalsListComponent },
            { path: "new", component: TerminalComponent },
            { path: ":id/edit", component: TerminalComponent }
        ] 
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TerminalsRoutingModule {}