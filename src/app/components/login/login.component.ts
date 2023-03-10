import { BaseFormComponent } from 'src/app/core/base/base-form-component';
import { ComponentRoute } from 'src/app/core/constants/routes/component.route';
import { ValidationConditionConst } from 'src/app/core/constants/validation-condition.const';
import { LoginDto } from 'src/app/core/dtos/login.dto';
import { AuthorizationService } from 'src/app/core/services/authorization.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent extends BaseFormComponent {
  ComponentRoute = ComponentRoute;

   constructor(
    private _authorizationService: AuthorizationService, 
    formBuilder: FormBuilder) { 
    super(formBuilder);
  }

  onSubmit(): void {
    if (this.form.valid) {
      let controls =  this.form.controls;
      let dto: LoginDto = {
        email: controls.email.value,
        password: controls.password.value
      }

      this._authorizationService.login(dto);
    }
  }

  protected setFormControls(): {} {
    return {
      email: [null,[Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(ValidationConditionConst.passwordMinLength)]]
    }
  }
}
