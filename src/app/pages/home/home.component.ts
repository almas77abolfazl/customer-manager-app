import { CommonModule } from '@angular/common';
import { Component, model, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, FormsModule, TabsComponent],
})
export class HomeComponent {
  activeTab: string = 'customers';
  showCustomerForm = signal(false);
  customerName = model('');
  customers = signal<string[]>([]);

  constructor(private router: Router) {}

  toggleForm() {
    this.showCustomerForm.update((val) => !val);
  }

  addCustomer() {
    const name = this.customerName();
    if (name.trim()) {
      this.customers.update((list) => [...list, name.trim()]);
      this.customerName.set('');
      this.showCustomerForm.set(false);
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
