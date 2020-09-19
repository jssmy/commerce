import { Component, Input, OnInit, Output } from '@angular/core';
import { IButtonStyle } from '../../commons/interfaces/ibutton-style';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() leftIcon: string;
  @Input() rightIcon: string;
  @Input() placeholder: string;
  @Input() type: string;
  @Input() name: string;
  @Input() id: string;
  @Input() borderRadius: string;
  @Input() height: string;
  @Input() fontWeight: string;
  styleFormGroup: IButtonStyle;
  styleInput: IButtonStyle;
  constructor() { }

  ngOnInit(): void {
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

}
