import { LoginDto } from 'src/app/core/models/login-dto';
import { AuthorizationService } from 'src/app/core/services/authorization.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = this.builder.group({
    email: [Validators.required, Validators.email],
    password: [Validators.required]
  })

  constructor(private authorizationService: AuthorizationService, private builder: FormBuilder ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let login: LoginDto = {
      Email: "mamich1998@gmail.com",
      Password: "12345"
    }

    this.authorizationService.login(login);
  }
}
