import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-customer-modal',
  templateUrl: './customer-modal.component.html',
  styleUrls: ['./customer-modal.component.scss']
})
export class CustomerPopUpComponent implements AfterViewInit {

  @ViewChild('modal') public modal: ElementRef;


  constructor(private _modal: ModalService) { }

  public ngAfterViewInit(): void {
    this._modal.modalEmitter.subscribe(customer => this.openModal())
  }

  public openModal(): void {
    this.modal.nativeElement.style.display = 'block';
  }

  public closeModal = (): void => {
    this.modal.nativeElement.style.display = 'none';
  }

}
