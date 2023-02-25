import { LoginDto } from 'src/app/core/dtos/login.dto';
import { AuthorizationService } from 'src/app/core/services/authorization.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private _authorizationService: AuthorizationService, 
    private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.form = this._formBuilder.group({
      email: [null,[Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(5)]]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      let controls =  this.form.controls;
      let dto: LoginDto = {
        email: controls.email.value,
        password: controls.password.value
      }

      this._authorizationService.login(dto);
    }
  }
}
