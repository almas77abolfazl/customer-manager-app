import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Customer } from 'src/app/models/customer.model';
import { CustomerDetailModalComponent } from '../customer-detail-modal/customer-detail-modal.component';
import { AlertController, ModalController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-customer-card',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.scss'],
})
export class CustomerCardComponent {
  @Input() customer!: Customer;
  @Output() onView = new EventEmitter<Customer>();
  @Output() onCall = new EventEmitter<string>();
  @Output() customerDeleted = new EventEmitter<number>();

  modalController = inject(ModalController);
  alertController = inject(AlertController);

  select() {
    this.onView.emit(this.customer);
  }

  async view(event: Event) {
    event.stopPropagation();
    this.onView.emit(this.customer);
    const modal = await this.modalController.create({
      component: CustomerDetailModalComponent,
      componentProps: { customer: this.customer },
    });
    await modal.present();
  }

  call(event: Event) {
    event.stopPropagation();
    this.onCall.emit(this.customer.phone);
  }

  async confirmDelete() {
    const alert = await this.alertController.create({
      header: 'حذف مشتری',
      message: 'آیا از حذف این مشتری مطمئن هستید؟',
      buttons: [
        {
          text: 'لغو',
          role: 'cancel',
        },
        {
          text: 'حذف',
          handler: () => {
            this.customerDeleted.emit(this.customer.id);
          },
        },
      ],
    });
    await alert.present();
  }
}
