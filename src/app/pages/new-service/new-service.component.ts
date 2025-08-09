import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-service',
  templateUrl: './new-service.component.html',
  styleUrls: ['./new-service.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule]
})
export class NewServiceComponent {
  customerSearch = '';
  filteredCustomers: any[] = [];
  customers = [
    { id: 1, name: 'رضا موسوی' },
    { id: 2, name: 'علی رضایی' },
    { id: 3, name: 'حسین کریمی' }
  ];

  showNewCustomerForm = false;
  newCustomer = { name: '', phone: '' };

  selectedCustomer: any = null;
  service = { type: '', price: null, notes: '' };

  searchCustomers() {
    const term = this.customerSearch.trim();
    this.filteredCustomers = this.customers.filter(c =>
      c.name.includes(term)
    );
  }

  selectCustomer(customer: any) {
    this.selectedCustomer = customer;
    this.showNewCustomerForm = false;
    this.customerSearch = customer.name;
    this.filteredCustomers = [];
  }

  createCustomer() {
    if (this.newCustomer.name) {
      const newCust = {
        id: this.customers.length + 1,
        ...this.newCustomer
      };
      this.customers.push(newCust);
      this.selectCustomer(newCust);
      this.newCustomer = { name: '', phone: '' };
    }
  }

  saveService() {
    console.log('سرویس ذخیره شد', {
      customer: this.selectedCustomer,
      service: this.service
    });
  }
}
