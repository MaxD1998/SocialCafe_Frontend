import { Component, forwardRef, Input, OnInit, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const CUSTOM_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FormInputComponent),
  multi: true
}

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css'],
  providers: [CUSTOM_VALUE_ACCESSOR]
})
export class FormInputComponent implements ControlValueAccessor {
  @Input() errorCode: string
  @Input() label: string;
  @Input() type: string;

  private _value: string;

  onValueChange(element: HTMLInputElement) {
    this._value = element.value;
    this.onChange(this._value);
    this.onTouch(this._value);
  }
  
  onChange: any = () => { }
  onTouch: any = () => { }

  writeValue(obj: string): void {
    this._value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;

  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
