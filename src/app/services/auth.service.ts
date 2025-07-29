import { Injectable, signal } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = signal(false);

  //TODO
  sendOtp(phone: string): Observable<boolean> {
    console.log('Sending OTP to', phone);
    return of(true);
  }

  //TODO
  verifyOtp(phone: string, otp: string): Observable<boolean> {
    const valid = otp === '1234';
    if (valid) {
      this.isLoggedIn.set(true);
      localStorage.setItem('token', 'test_token');
    }
    return of(valid);
  }
}
