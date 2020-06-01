import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _user: UserService,
    private _router: Router
  ) { }

  public ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',[
        Validators.required,
        Validators.pattern(this._user.passwordValidator),
        Validators.minLength(8)
      ]]
    })
  }

  public get controls() {
    return this.loginForm.controls;
  }

  public onSubmit(form): void {
    if(form.valid){
      this._user.login(form.value.email,form.value.password);
      this._router.navigate(['customers']);
    }
  }

}
