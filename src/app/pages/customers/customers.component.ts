import { Component, inject, OnInit } from '@angular/core';
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
export class CustomersComponent implements OnInit {
  filteredCustomers: Customer[] = [];
  searchTerm: string = '';
  filterStatus: string = 'all';

  customers: Customer[] = [];
  currentPage = 1;
  pageSize = 20;
  hasMore = true;
  private customerService = inject(MockCustomerService);

  ngOnInit(): void {
    this.loadCustomers();
  }

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

  loadCustomers() {
    this.customerService.getCustomers(this.currentPage, this.pageSize).subscribe((res) => {
      this.customers.push(...res);
      this.hasMore = res.length === this.pageSize;
      this.currentPage++;
      this.filterCustomers();
    });
  }

  loadMore(event: any) {
    if (this.hasMore) {
      this.loadCustomers();
    }
    setTimeout(() => {
      event.target.complete();
    }, 500);
  }
}

///// --------

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class MockCustomerService {
  private mockCustomers: Customer[] = [];

  constructor() {
    // تولید ۱۰۰ مشتری فرضی
    for (let i = 1; i <= 100; i++) {
      this.mockCustomers.push({
        id: i,
        name: `مشتری شماره ${i}`,
        phone: `0912${Math.floor(1000000 + Math.random() * 9000000)}`,
        avatar: '',
        status: i % 2 === 0 ? 'active' : 'inactive',
        carType: ['پژو ۴۰۵', 'دنا', 'پراید', 'سمند', 'تیبا'][i % 5],
      });
    }
  }

  getCustomers(page: number, size: number): Observable<Customer[]> {
    const start = (page - 1) * size;
    const end = start + size;
    const pagedCustomers = this.mockCustomers.slice(start, end);
    return of(pagedCustomers).pipe(delay(500)); // شبیه‌سازی تاخیر شبکه
  }
}
