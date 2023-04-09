import { BaseFormComponent } from 'src/app/core/bases/base-form-component';
import { ValidationConditionConst } from 'src/app/core/constants/validation-condition.const';
import { RegisterDto } from 'src/app/core/dtos/register.dto';
import { AuthorizationService } from 'src/app/core/services/authorization.service';

import { Component } from '@angular/core';
import {
    AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent extends BaseFormComponent {
  constructor(
    private _authorizationService: AuthorizationService,
    formBuilder: FormBuilder) {
    super(formBuilder);
  }

  onSubmit(): void {
    console.log(this.form);
    if (!this.form.valid) {
      return;
    }

    const controls = this.form.controls;
    const dto: RegisterDto = {
      email: controls.email.value,
      firstName: controls.firstName.value,
      lastName: controls.lastName.value,
      password: controls.password.value
    }

    this._authorizationService.register(dto);
  }

  private equal(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value === control.parent?.get("password").value ? null : { equal: true } 
    }
  }

  protected setFormControls(): {} {
    return {
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(ValidationConditionConst.passwordMinLength)]],
      repeatedPassword: [null, [Validators.required, this.equal()]]
    };
  }
}
