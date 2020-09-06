import { Component, OnInit, Input } from '@angular/core';
import { Icon } from '../../commons/constants/icons.constants';
import { IButtonStyle } from '../../commons/interfaces/ibutton-style';
enum Styles {
  outline =  'outline',
  filled =  'filled'
}
@Component({
  selector: 'app-button-icon',
  templateUrl: './button-icon.component.html',
  styleUrls: ['./button-icon.component.scss']
})
export class ButtonIconComponent implements OnInit {

  @Input() icon: string;
  @Input() style: string; // outline | filled
  @Input() size: string;
  @Input() color: string;
  @Input() colorText: string;
  @Input() SizeText: string;
  @Input() sizeIcon: string;
  @Input() text: string;
  styled: IButtonStyle;
  styledText: IButtonStyle;
  constructor() { }

  ngOnInit(): void {
    this.icon = this.icon ? this.icon : Icon.glyphicon.heart;
    this.styled = {
      'background-color': this.style === Styles.filled ? this.color : 'rgb(239 232 232)',
      'border-color': this.color ? this.color : '#dbdbdb',
      'font-size': this.sizeIcon ? this.sizeIcon : '20px',
      width: this.size ? this.size : '35px',
      height: this.size ? this.size : '35px',
      color: this.color ? this.color : '#66615B'
    };

    this.styledText = {
      color: this.color ? this.color : '#aaa',
      'font-size': this.SizeText ? this.SizeText : '0.8em',
      'font-weight': '600'
    };
  }

}

