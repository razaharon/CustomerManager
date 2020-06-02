import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // User state Observable manages user state
  private _userState = new BehaviorSubject<string>(null);
  public get userState() { return this._userState }
  // ReExp accepts letters string with at least 1 capital letter
  public readonly passwordValidator = new RegExp(/^[a-zA-Z]*[A-Z]+[a-zA-Z]*$/);

  constructor() {
    let user = this.getLocalStorage();
    if (user) {
      this.userState.next(user);
    }
  }

  public login(email: string, password: string): void {
    if (email && this.passwordValidator.test(password)) {
      this.setLocalStorage(email);
      this.userState.next(email);
    }
  }

  public logout(): void {
    this.clearLocalStorage();
    this.userState.next(null);
  }

  //#region LocalStorage
  private setLocalStorage(email: string): void {
    localStorage.setItem('user', email);
  }

  private getLocalStorage(): string {
    return localStorage.getItem('user');
  }

  private clearLocalStorage(): void {
    localStorage.removeItem('user');
  }
  //#endregion
}
