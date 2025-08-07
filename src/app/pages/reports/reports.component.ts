import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
  standalone: true,
  imports: [IonicModule, BaseChartDirective],
})
export class ReportsComponent {
  kpis = [
    { title: 'تعداد کل مشتری‌ها', value: 120, description: 'تا امروز' },
    { title: 'درآمد ماه جاری', value: '۲۵,۰۰۰,۰۰۰ تومان', description: 'بر اساس سرویس‌ها' },
    { title: 'مراجعات این ماه', value: 42, description: 'ثبت شده' },
    { title: 'میانگین امتیاز', value: '۴.۷ از ۵', description: 'رضایت مشتریان' },
  ];

  chartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد'],
    datasets: [
      {
        label: 'تعداد مراجعات',
        data: [12, 19, 3, 5, 8],
        backgroundColor: '#3880ff',
      },
    ],
  };

  barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد'],
    datasets: [{ data: [6500000, 8000000, 9000000, 7000000, 12500000], label: 'درآمد ماهانه', backgroundColor: '#3880ff' }],
  };

  chartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          font: {
            family: 'IRANYekanX',
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            family: 'IRANYekanX',
          },
        },
      },
      y: {
        ticks: {
          font: {
            family: 'IRANYekanX',
          },
        },
      },
    },
  };

  exportToExcel() {
    // بعداً این رو پیاده‌سازی می‌کنیم
    console.log('Excel export requested.');
  }
}
