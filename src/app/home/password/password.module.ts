import { HeaderComponent } from './../../shared/components/header/header.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PasswordRoutingModule } from './password-routing.module';
import { PasswordComponent } from './password.component';
import { PageHeaderModule } from '../../shared/modules/index';

@NgModule({
    declarations:[
        PasswordComponent
    ],
    imports: [
        CommonModule,
        PasswordRoutingModule,
        PageHeaderModule
    ]
})
export class PasswordModule {}