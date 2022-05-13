import { Directive, ElementRef ,Renderer2,Input, HostListener} from '@angular/core';

@Directive({
  selector: '[appRoundBorderShadow]'
})
export class RoundBorderShadowDirective {
  highlightcolor:string="grey";
 defaultcolor:string="darkgray"


  constructor(renderer:Renderer2, private elemRef: ElementRef) { 

    renderer.setStyle(elemRef.nativeElement, 'border-radius', '30px');
    renderer.setStyle(elemRef.nativeElement, 'box-shadow', '5px 10px');


  }
  @HostListener('mouseenter')onMouseEnter()
  {
    this.elemRef.nativeElement.style.boxShadow=`20px 20px 50px 15px ${this.highlightcolor}`;
  }
  @HostListener('mouseout')onMouseOut()
  {

   this.elemRef.nativeElement.style.boxShadow=`1px 1px 5px 5px ${this.defaultcolor}`;

  }
}

