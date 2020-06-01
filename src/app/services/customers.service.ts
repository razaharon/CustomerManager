import { Injectable } from '@angular/core';
import { Customer } from '../interfaces/customer';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  public customersState: BehaviorSubject<Customer[]> = new BehaviorSubject([]);

  constructor() {
    let customers = this.getLocalStorage();
    if (customers) {
      this.customersState.next(customers);
    }
  }

  public generateEmptyCustomer(): Customer {
    return {
      id: -1,
      firstName: '',
      lastName: '',
      city: '',
      country: '',
      gender: ''
    }
  }

  public updateCustomer(customer: Customer): void {
    let customers = this.customersState.getValue();
    let result = customers.filter(c => c.id === customer.id)[0];
    Object.assign(result, customer);
    this.setLocalStorage(customers);
    this.customersState.next(customers);
  }

  public addCustomer(customer: Customer): void {
    let customers = this.customersState.getValue();
    customer.id = customers.length ? customers.length + 1 : 1;
    customers.push(customer);
    this.setLocalStorage(customers);
    this.customersState.next(customers);
  }

  public deleteCustomer(customerId: number): void {
    let customers = this.customersState.getValue();
    customers = customers.filter(customer => customer.id!==customerId);
    this.setLocalStorage(customers);
    this.customersState.next(customers);
  }

  //#region LocalStorage
  private setLocalStorage(customers: Customer[]): void {
    localStorage.setItem('customers', JSON.stringify(customers));
  }

  private getLocalStorage(): Customer[] {
    let jsonString = localStorage.getItem('customers');
    return JSON.parse(jsonString);
  }
  //#endregion
}
