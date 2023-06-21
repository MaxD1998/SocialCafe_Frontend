import { Component, forwardRef, Input, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const CUSTOM_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FormInputComponent),
  multi: true,
};

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.less'],
  providers: [CUSTOM_VALUE_ACCESSOR],
})
export class FormInputComponent implements ControlValueAccessor {
  @Input() disabled: boolean = false;
  @Input() errorCode: string;
  @Input() label: string;
  @Input() type: string;

  value: string;

  onValueChange(element: HTMLInputElement) {
    this.value = element.value;
    this.onChange(this.value);
    this.onTouch(this.value);
  }

  onChange: any = () => {};
  onTouch: any = () => {};

  writeValue(obj: string): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
