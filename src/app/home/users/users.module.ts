import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { PageHeaderModule } from './../../shared/modules';
import { UserComponent } from './user/user.component';
import { UsersListComponent } from './users-list/users-list.component';

@NgModule({
    declarations: [
        UsersComponent,
        UserComponent,
        UsersListComponent
    ],
    imports: [
        CommonModule,
        UsersRoutingModule,
        PageHeaderModule,
        NgbModule.forRoot(),
    ]
})
export class UsersModule {}