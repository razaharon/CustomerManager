import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { Customer } from 'src/app/interfaces/customer';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

  public customer: Customer;
  public customerForm: FormGroup;
  public formType: string; // Add / Update
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private _modal: ModalService,
    private _formBuilder: FormBuilder,
    private _customers: CustomersService
  ) {
    this.customer = this._customers.generateEmptyCustomer();
  }

  ngOnInit(): void {
    this.subscribeToModalService();
    this.buildForm();
  }

  private buildForm(): void {
    this.customerForm = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  private subscribeToModalService(): void {
    this._modal.modalEmitter.subscribe(customer => {
      if (customer) {
        this.customer = customer;
        this.formType = 'Update';
      }
      else {
        this.formType = 'Add';
        this.customer = this._customers.generateEmptyCustomer();
      }
      this.updateFormData();
    });
  }

  public get controls() { return this.customerForm.controls }

  private updateFormData(): void {
    this.controls.firstName.setValue(this.customer.firstName)
    this.controls.lastName.setValue(this.customer.lastName)
    this.controls.city.setValue(this.customer.city)
    this.controls.country.setValue(this.customer.country)
    this.controls.gender.setValue(this.customer.gender)
  }

  public onSubmit(form): void {
    if (form.valid) {
      if (this.formType === 'Add') { this._customers.addCustomer(form.value) }
      if (this.formType === 'Update') { this._customers.updateCustomer({ id: this.customer.id, ...form.value }) }
    }
    this.closeModal.emit();
  }

  public deleteCustomer(): void {
    this._customers.deleteCustomer(this.customer.id);
    this.closeModal.emit();
  }

}
