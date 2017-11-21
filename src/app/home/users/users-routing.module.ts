import { UsersListComponent } from './users-list/users-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
    { path: '', component: UsersComponent, children: [
        { path: '', component: UsersListComponent },
        { path: 'new', component: UserComponent },
        { path: ':id/edit', component: UserComponent }
    ] }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule {}