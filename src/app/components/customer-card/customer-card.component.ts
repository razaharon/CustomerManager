import { Component, Input } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { Customer } from 'src/app/interfaces/customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.scss']
})
export class CustomerCardComponent {

  @Input() public customer: Customer;

  public maleImage = '../../../assets/pictures/avatars/male.png';
  public femaleImage = '../../../assets/pictures/avatars/female.png';

  constructor(
    private _modal: ModalService,
    private _customers: CustomersService
  ) {
    this.customer = this._customers.generateEmptyCustomer()
  }

  public updateCustomer(): void {
    this._modal.openModal(this.customer);
  }

}
