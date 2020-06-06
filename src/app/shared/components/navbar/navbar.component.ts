import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/user/services/user.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  public user: string = null;
  private userSubscription: Subscription;

  constructor(
    private _user: UserService,
    private _router: Router
  ) { }

  public ngOnInit(): void {
    this.userSubscription = this._user.userState.subscribe(user => this.user = user);
  }

  public ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  public logout(): void {
    this._user.logout();
    this._router.navigate(['login']);
  }
}
