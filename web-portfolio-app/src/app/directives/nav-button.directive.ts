import { ElementRef, Renderer2, HostListener, Directive, OnChanges } from "@angular/core";

@Directive({
  selector: '[appButtonActive]'
})
export class ButtonActiveDirective implements OnChanges{

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') onclick() {
    this.renderer.setStyle(this.elRef.nativeElement, 'text-shadow', '0 10px 10px #f00, 0 10px 40px #f00, 0 10px 80px #f00');
    this.renderer.setStyle(this.elRef.nativeElement, 'color', '#f00');
  }
  @HostListener('click') ngOnChanges() {
      // this.renderer.setStyle(this.elRef.nativeElement, 'text-shadow', '0 10px 10px #f00, 0 10px 40px #f00, 0 10px 80px #f00');
      this.renderer.setStyle(this.elRef.nativeElement, 'color', '#fefefe'); 
  }
 }