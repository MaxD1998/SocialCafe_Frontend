import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidator {
  static equal(fieldName: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value === control.parent?.get(fieldName).value ? null : { equal: true };
    };
  }
}
