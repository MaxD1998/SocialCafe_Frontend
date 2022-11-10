import { LoginDto } from 'src/app/core/models/login-dto';
import { AuthorizationService } from 'src/app/core/services/authorization.service';

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private authorizationService: AuthorizationService, 
    private formBuilder: FormBuilder,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.form = this.formBuilder.group({
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

      this.authorizationService.login(dto);
    }
  }
}
