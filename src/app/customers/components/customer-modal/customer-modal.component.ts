import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { ModalService } from 'src/app/customers/services/modal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customer-modal',
  templateUrl: './customer-modal.component.html',
  styleUrls: ['./customer-modal.component.scss']
})
export class CustomerPopUpComponent implements AfterViewInit, OnDestroy {

  @ViewChild('modal') public modal: ElementRef;
  private modalSubscription: Subscription;

  constructor(private _modal: ModalService) { }

  public ngAfterViewInit(): void {
    this.modalSubscription = this._modal.modalEmitter.subscribe(customer => this.openModal())
  }

  public ngOnDestroy(): void {
    this.modalSubscription.unsubscribe();
  }

  public openModal(): void {
    this.modal.nativeElement.style.display = 'block';
  }

  public closeModal = (): void => {
    this.modal.nativeElement.style.display = 'none';
  }

}
