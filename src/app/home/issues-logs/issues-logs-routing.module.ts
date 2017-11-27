import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { IssuesLogsComponent } from './issues-logs.component';

const routes: Routes = [
    { path: '', component: IssuesLogsComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IssuesLogsRoutingModule {}