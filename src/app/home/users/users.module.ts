import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { PageHeaderModule } from './../../shared/modules';
import { UserComponent } from './user/user.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PipeModule } from '../../shared/pipes/pipes.module';

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
        ReactiveFormsModule,
        FormsModule,
        // NgbModule.forRoot(),
        // Ng2FilterPipeModule,
        Ng2SearchPipeModule,
        PipeModule
    ]
})
export class UsersModule {}