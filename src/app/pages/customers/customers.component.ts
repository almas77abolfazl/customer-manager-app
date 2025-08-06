import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Customer } from 'src/app/models/customer.model';
import { CustomerCardComponent } from './customer-card/customer-card.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CustomerCardComponent],
})
export class CustomersComponent {
  customers: Customer[] = [
    { id: 1, avatar: '', name: 'رضا حسینی', phone: '0923123123', status: 'active' },
    { id: 1, avatar: '', name: 'محمد ایرانپور', phone: '0923123123', status: 'inactive' },
    { id: 1, avatar: '', name: 'خانم ایرانی', phone: '0923123123', status: 'active' },
    { id: 1, avatar: '', name: 'ممد بنا', phone: '0923123123', status: 'inactive' },
    { id: 1, avatar: '', name: 'احمد نقاش', phone: '0923123123', status: 'active' },
    { id: 1, avatar: '', name: 'امینی', phone: '0923123123', status: 'active' },
  ];
  filteredCustomers: Customer[] = [];
  searchTerm: string = '';
  filterStatus: string = 'all';

  filterCustomers() {
    this.filteredCustomers = this.customers.filter((c) => {
      const matchesSearch = c.name.includes(this.searchTerm) || c.phone.includes(this.searchTerm);
      const matchesStatus = this.filterStatus === 'all' || c.status === this.filterStatus;
      return matchesSearch && matchesStatus;
    });
  }

  openCustomerDetails(customer: Customer) {
    // باز کردن جزئیات
  }

  callCustomer(phone: string) {
    window.open(`tel:${phone}`);
  }

  openAddCustomerModal() {
    // باز کردن فرم ثبت مشتری
  }
}
