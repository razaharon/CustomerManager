import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomerCardComponent } from './components/customer-card/customer-card.component';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { CustomerPopUpComponent } from './components/customer-modal/customer-modal.component';
import { CustomersComponent } from './components/customers/customers.component';



@NgModule({
  declarations: [
    CustomerCardComponent,
    CustomerFormComponent,
    CustomerPopUpComponent,
    CustomersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CustomersModule { }
