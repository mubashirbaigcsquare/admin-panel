import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'users' },
            // { path: 'home', redirectTo: 'users' },
            // { path: '', pathMatch: 'full', redirectTo: 'users' },
            { path: 'users', loadChildren: './users/users.module#UsersModule' },
            { path: 'password', loadChildren: './password/password.module#PasswordModule' },
            { path: 'terminals', loadChildren: './terminals/terminals.module#TerminalsModule' },
            { path: 'terminals-monitor', loadChildren: './monitoring/monitoring.module#MonitoringModule' },
            { path: 'issues-logs', loadChildren: './issues-logs/issues-logs.module#IssuesLogsModule' }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }