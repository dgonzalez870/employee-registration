import {
  Directive,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { FormControlName } from '@angular/forms';

import { ControlErrorComponent } from './control-error.component';

@Directive({
  selector: '[appControlError]',
  standalone: true,
})
export class ControlErrorDirective implements OnInit {
  constructor(
    private formControlName: FormControlName,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(): void {
    const component = this.viewContainerRef.createComponent(
      ControlErrorComponent
    );
    component.instance.control = this.formControlName;
  }
}
