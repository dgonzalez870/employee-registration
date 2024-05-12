import {
  Component,
  ElementRef,
  forwardRef,
  Input,
  QueryList,
  ViewChildren,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

import { SelectOptions } from './models/select-options';

@Component({
  selector: 'app-select-multiple',
  standalone: true,
  imports: [],
  templateUrl: './select-multiple.component.html',
  styleUrl: './select-multiple.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectMultipleComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: SelectMultipleComponent,
      multi: true,
    },
  ],
})
export class SelectMultipleComponent implements ControlValueAccessor {
  @ViewChildren('chekBoxes') chekBoxes!: QueryList<ElementRef>;

  @Input() options: SelectOptions[] = [];

  onChange = (_: any) => {};
  onTouch = () => {};

  writeValue(obj: any): void {
    this.options = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    if (this.chekBoxes) {
      this.chekBoxes.forEach((chekBox) => {
        chekBox.nativeElement.disabled = isDisabled;
      });
    }
  }
}
