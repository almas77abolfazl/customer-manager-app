import { Component, computed, signal } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IonicModule, FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  phone = signal('');
  otp = signal('');
  otpSent = signal(false);
  loginError = signal('');

  constructor(private authService: AuthService, private router: Router) {}

  sendOtp() {
    this.loginError.set('');
    if (!/^09\d{9}$/.test(this.phone())) {
      this.loginError.set('شماره موبایل معتبر نیست.');
      return;
    }
    this.authService.sendOtp(this.phone()).subscribe(() => {
      this.otpSent.set(true);
    });
  }

  verifyOtp() {
    this.authService.verifyOtp(this.phone(), this.otp()).subscribe((valid) => {
      if (valid) {
        alert('ورود موفق!');
        this.router.navigate(['/home']);
      } else {
        this.loginError.set('کد OTP اشتباه است.');
      }
    });
  }
}
