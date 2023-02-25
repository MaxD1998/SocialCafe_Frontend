import { RegisterDto } from 'src/app/core/dtos/register.dto';
import { AuthorizationService } from 'src/app/core/services/authorization.service';

import { Component, OnInit } from '@angular/core';
import {
    AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(
    private _authorizationService: AuthorizationService,
    private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    if (!this.form.valid) {
      console.log(this.form.errors)
      return;
    }

    const dto: RegisterDto = {
      email: this.form.get("email").value,
      firstName: this.form.get("firstName").value,
      lastName: this.form.get("lastName").value,
      password: this.form.get("password").value
    }

    this._authorizationService.register(dto);
  }

  private initForm() {
    this.form = this._formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(9)]],
      repeatedPassword: [null, [Validators.required, this.equal()]]
    });
  }

  private equal(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value === control.parent?.get("password").value ? null : { equal: true } 
    }
  }
}
