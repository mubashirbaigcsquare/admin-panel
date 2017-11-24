import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent, SidebarComponent } from '../shared/components';


@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent,
        SidebarComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        NgbDropdownModule.forRoot()
    ]
})
export class HomeModule {}