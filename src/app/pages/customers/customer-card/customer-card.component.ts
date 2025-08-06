import { CommonModule, DatePipe } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-customer-card',
  standalone: true,
  imports: [IonicModule, DatePipe],
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.scss'],
})
export class CustomerCardComponent {
  @Input() customer!: Customer;
  @Output() onView = new EventEmitter<Customer>();
  @Output() onCall = new EventEmitter<string>();

  select() {
    this.onView.emit(this.customer);
  }

  view(event: Event) {
    event.stopPropagation();
    this.onView.emit(this.customer);
  }

  call(event: Event) {
    event.stopPropagation();
    this.onCall.emit(this.customer.phone);
  }
}
