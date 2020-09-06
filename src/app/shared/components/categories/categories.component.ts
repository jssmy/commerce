import { Component, OnInit } from '@angular/core';
import { Icon } from '../../commons/constants/icons.constants';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  icon = Icon;
  constructor() { }

  ngOnInit(): void {
  }

}
