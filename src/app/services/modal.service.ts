import { Injectable, EventEmitter } from '@angular/core';
import { Customer } from '../interfaces/customer';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private _modalEmitter: EventEmitter<Customer> = new EventEmitter<Customer>();
  public get modalEmitter() { return this._modalEmitter }

  public openModal(customer?: Customer): void {
    this.modalEmitter.emit(customer);
  }
}
