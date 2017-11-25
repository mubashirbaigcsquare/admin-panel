import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PasswordComponent } from './password.component';

const routes: Routes = [
    { path: '', component: PasswordComponent }
]

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class PasswordRoutingModule {}