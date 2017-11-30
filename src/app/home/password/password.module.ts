import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './../../shared/components/header/header.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PasswordRoutingModule } from './password-routing.module';
import { PasswordComponent } from './password.component';
import { PageHeaderModule } from '../../shared/modules/index';
import { ConfirmPasswordValidator } from './confirm-password.directive';

@NgModule({
    declarations:[
        PasswordComponent,
        ConfirmPasswordValidator
    ],
    imports: [
        CommonModule,
        PasswordRoutingModule,
        PageHeaderModule,
        FormsModule
    ]
})
export class PasswordModule {}