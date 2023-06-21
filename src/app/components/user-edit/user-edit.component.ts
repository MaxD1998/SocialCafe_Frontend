import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseFormComponent } from 'src/app/core/bases/base-form-component';
import { ComponentRoute } from 'src/app/core/constants/routes/component.route';
import { ValidationConditionConst } from 'src/app/core/constants/validation-condition.const';
import { UserDataService } from 'src/app/core/data-services/user.data-service';
import { UserDto } from 'src/app/core/dtos/user/user.dto';
import { UserInputDto } from 'src/app/core/dtos/user/user.input-dto';
import { GuidHelper } from 'src/app/core/helpers/guid.helper';
import { AccountService } from 'src/app/core/services/account.service';
import { CustomValidator } from 'src/app/core/validators/custom-validator';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.less'],
})
export class UserEditComponent extends BaseFormComponent implements OnInit {
  user: UserDto = null;

  constructor(
    private _accountService: AccountService,
    private _userDataService: UserDataService,
    private _activatedRouteSnapshot: ActivatedRoute,
    private _router: Router,
    formBuilder: FormBuilder
  ) {
    super(formBuilder);
  }

  ngOnInit(): void {
    const id: string = this._activatedRouteSnapshot.snapshot.params['id'];
    if (!GuidHelper.isGuid(id)) {
      this._router.navigateByUrl(ComponentRoute.main);
    }

    this._userDataService.getById(id).subscribe(response => {
      this.user = response;
      this.fillForm(this.user);
    });
  }

  onSubmit(): void {
    this.form.markAllAsTouched();
    if (!this.form.valid) {
      return;
    }

    const controls = this.form.controls;
    const dto: UserInputDto = {
      email: controls.email.value,
      firstName: controls.firstName.value,
      lastName: controls.lastName.value,
      password: controls.password.value,
    };

    this._userDataService
      .update(this.user.id, dto)
      .subscribe(response => this._accountService.setUsername(`${response.firstName} ${response.lastName}`));
  }

  protected setFormControls(): {} {
    return {
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.minLength(ValidationConditionConst.passwordMinLength)]],
      repeatedPassword: [null, [CustomValidator.equal('password')]],
    };
  }

  private fillForm(dto: UserDto): void {
    this.form.patchValue({
      email: dto.email,
      firstName: dto.firstName,
      lastName: dto.lastName,
    });
  }
}
