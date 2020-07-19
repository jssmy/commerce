import { Component, OnInit, Input } from '@angular/core';
import { IproductItem } from '../../commons/interfaces/iproduct-item';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: IproductItem;
  
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  deatail(event){
    event.preventDefault();
    this.router.navigate(['producto',this.product.slug]);
  }

}
