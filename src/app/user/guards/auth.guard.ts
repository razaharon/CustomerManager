import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private _user: UserService,
    private _router: Router
  ) { }

  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let user = this._user.userState.getValue();

    if (state.url === '/customers') {
      if (user) { return true; }
      else { this._router.navigate(['login']); return false; }
    }

    if(state.url === '/login') {
      if(!user) { return true; }
      else { this._router.navigate(['customers']); return false; }
    }
  }

}
