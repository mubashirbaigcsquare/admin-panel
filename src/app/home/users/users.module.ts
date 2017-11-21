import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { PageHeaderModule } from './../../shared/modules';

@NgModule({
    declarations: [
        UsersComponent
    ],
    imports: [
        CommonModule,
        UsersRoutingModule,
        PageHeaderModule
    ]
})
export class UsersModule {}