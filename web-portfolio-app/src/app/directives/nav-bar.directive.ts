import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';


@Directive({
  selector: '[appNavBar]'
})
export class NavBarDirective {

  constructor(private navigationRef: ElementRef, private renderer: Renderer2) { }


  @HostListener('window:scroll') onScroll(){
    this.renderer.setStyle(this.navigationRef.nativeElement, 'transition', '1.5s');
    this.renderer.setStyle(this.navigationRef.nativeElement, 'opacity', '1');
  }

  @HostListener('document:wheel') onScrollTop(){
    this.renderer.setStyle(this.navigationRef.nativeElement, 'opacity', '0.5'); 
  }

}
