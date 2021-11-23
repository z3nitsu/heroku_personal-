import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { MyForm1Component } from './my-form1/my-form1.component';
// import { IfffComponent } from './ifdrctv.component';
// import { Swtch1Component } from './ngswtch.component';
// import { BankAccount } from './inpt1.component';
// import { App } from './inpt1.component';
import { report } from './inputreport.component';
import { App } from './inputreport.component';

@NgModule({
  declarations: [
    AppComponent,
    // MyForm1Component,
    // IfffComponent,
    // Swtch1Component,
    // BankAccount,
    report,
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
