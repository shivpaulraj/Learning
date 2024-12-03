import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  login(username: string, password: string): boolean {
    // Dummy authentication logic
    if (username === 'admin' && password === 'admin') {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    console.log(this.isAuthenticated);
    return this.isAuthenticated;
  }
}
