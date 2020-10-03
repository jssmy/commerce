import { Component, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { isThisTypeNode } from 'typescript';
import { IButtonStyle } from '../../commons/interfaces/ibutton-style';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements OnInit, ControlValueAccessor {

  @Input() leftIcon: string;
  @Input() rightIcon: string;
  @Input() placeholder: string;
  @Input() type: string;
  @Input() name: string;
  @Input() id: string;
  @Input() borderRadius: string;
  @Input() height: string;
  @Input() fontWeight: string;
  @Input() errors: string;
  styleFormGroup: IButtonStyle;
  styleInput: IButtonStyle;
  value: string;
  isDisabled: boolean;
  onChange = (_: any) => { };
  onTouch = () => { };

  ngOnInit(): void {
    this.value = '';
    this.type = this.type || '';
    this.placeholder = this.placeholder || '';
    this.styleFormGroup = {
      'border-radius': this.borderRadius || '5px 5px 5px 5px',
      'font-weight': this.fontWeight || 'normal'
    };
    this.styleInput = {
      'border-radius': this.borderRadius || '5px 5px 5px 5px',
      height: this.height
    };
  }

  writeValue(value: any): void {
    this.value = value || '';
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    console.log(this.errors);
    this.onTouch = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
  onInput(value: string) {
    this.value = value || '';
    this.onTouch();
    this.onChange(this.value);
  }

}
