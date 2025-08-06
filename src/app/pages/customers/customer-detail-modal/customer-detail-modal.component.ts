import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular/standalone';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-customer-detail-modal',
  templateUrl: './customer-detail-modal.component.html',
  styleUrls: ['./customer-detail-modal.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule],
})
export class CustomerDetailModalComponent implements OnInit {
  @Input() customer!: Customer;
  @Output() customerUpdated = new EventEmitter<Customer>();
  @Input() mode: 'create' | 'edit' = 'edit';
  @Output() customerCreated = new EventEmitter<Customer>();

  modalController = inject(ModalController);

  isEditMode = false;

  constructor() {}

  ngOnInit() {
    if (this.mode === 'create' && !this.customer) {
      this.customer = {
        id: Date.now(), // اگر ID لازم نیست، حذفش کن
        name: '',
        phone: '',
        status: 'active',
      };
      this.isEditMode = true;
    }
  }

  close() {
    this.modalController.dismiss();
  }

  enableEdit() {
    this.isEditMode = true;
  }

  saveChanges() {
    if (this.mode === 'edit') {
      this.customerUpdated.emit(this.customer);
    } else {
      this.customerCreated.emit(this.customer);
    }

    this.isEditMode = false;
    this.close();
  }
}
