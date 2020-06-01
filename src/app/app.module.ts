import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { CustomerPopUpComponent } from './components/customer-modal/customer-modal.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CustomerCardComponent } from './components/customer-card/customer-card.component';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    CustomerPopUpComponent,
    CustomersComponent,
    CustomerCardComponent,
    CustomerFormComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
