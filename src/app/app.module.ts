import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TerminalService } from './shared/services/terminal.service';
import { UserService } from './shared/services/user.service';
import { MonitorService } from './shared/services/monitor.service';
import { AppRoutingModule } from './app-routing.module';
import { PasswordService } from './shared/services/password.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [MonitorService, TerminalService, UserService, PasswordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
