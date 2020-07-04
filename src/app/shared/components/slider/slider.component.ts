import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input ('imgs') imgs: string[];
  @Input('timer') transition: string;
  imag: any[] = [];
  sizeul : number;
  sizeli: number;
  animation: string;
  time:number ;
  sliderc: string;
   sliderl; string;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.sizeul = 100 * this.imgs.length;
    this.sizeli = 100 / this.imgs.length;
    this.time = parseInt(this.transition) * this.imgs.length;
    
    let sct: string;
    let lt: string;
    let porcentaje: number = 0;
    lt = '@keyframes carouselM { '
     for( let x = 0 ; x <= 100; x = x + this.sizeli){
       if(porcentaje == this.sizeul || porcentaje == 0){
         if(porcentaje != 100){
           lt += x - 5 +"% {left: -"+(porcentaje-100)+"%;} ";
         }
         porcentaje = 0;
         lt += x +"% {left: "+porcentaje+"%;} ";
         porcentaje += 100;
       }else{
         lt += x - 5 +"% {left: -"+(porcentaje-100)+"%;} ";
         lt += x +"% {left: -"+porcentaje+"%;} ";
         porcentaje += 100;
       }
     }
     lt += ' };';

      let hd= document.getElementsByTagName('head')[0];
      let cr = document.createElement("style");
      let tx = document.createTextNode(lt);
      cr.appendChild(tx);
      hd.appendChild(cr);

      this.sliderc = this.sizeul.toString() + '%';
      this.animation = "carouselM "+ this.time+"s infinite";
      this.sliderl = this.sizeli.toString() + '%';
  
      this.sliderl = this.sizeli.toString() + '%';
      this.imgs.forEach(e => {
        this.imag.push(this.sanitizer.bypassSecurityTrustStyle(`url(${e}')`))
      });
  }

}
