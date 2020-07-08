import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appButtonHighLight]'
})
export class ButtonHighLightDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') mouseEnter(){
     this.renderer.setStyle(this.elRef.nativeElement, 'transition', '1.5s')
     this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black')
  }
  @HostListener('mouseleave') mouseLeave(){
    this.renderer.setStyle(this.elRef.nativeElement, 'transition', '1s')
    this.renderer.setStyle(this.elRef.nativeElement, 'color', '#f30')
  }
}
