import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user: string = null;

  constructor(
    private _user: UserService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._user.userState.subscribe(user => this.user = user);
  }

  logout(): void {
    this._user.logout();
    this._router.navigate(['login']);
  }
}
