import { Component, OnInit, OnDestroy } from '@angular/core';
import { Customer } from 'src/app/interfaces/customer';
import { ModalService } from 'src/app/services/modal.service';
import { CustomersService } from 'src/app/services/customers.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit, OnDestroy {

  private customersSubscription: Subscription;
  private customers: Customer[];
  public filteredCustomers: Customer[];

  public cardView: boolean = true;

  public maleImage = '../../../assets/pictures/avatars/male.png';
  public femaleImage = '../../../assets/pictures/avatars/female.png';

  constructor(
    private _modal: ModalService,
    private _customers: CustomersService
  ) { }

  public ngOnInit(): void {
    this.customersSubscription = this._customers.customersState.subscribe(customers =>
      this.filteredCustomers = this.customers = customers);
  }

  public ngOnDestroy(): void {
    this.customersSubscription.unsubscribe();
  }

  public onSearch(search: string): void {
    if (search) {
      this.filteredCustomers = this.customers
        .filter(customer =>
          `${customer.firstName} ${customer.lastName}`.toLowerCase().includes(search.toLowerCase()))
    }
    else {
      this.filteredCustomers = this.customers;
    }
  }

  public newCustomer(): void {
    this._modal.openModal();
  }

  public setTableView(): void {
    this.cardView = false;
  }

  public setCardView(): void {
    this.cardView = true;
  }

  public openModal(): void {
    this._modal.openModal();
  }
}
