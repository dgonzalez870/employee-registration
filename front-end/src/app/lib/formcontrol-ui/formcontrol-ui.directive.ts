import {
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appFormcontrolUi]',
  standalone: true,
})
export class FormcontrolUiDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const elementClasses = ['p-2', 'border', 'border-slate-950', 'rounded'];

    elementClasses.forEach((className) => {
      this.renderer.addClass(this.elementRef.nativeElement, className);
    });
  }
}
