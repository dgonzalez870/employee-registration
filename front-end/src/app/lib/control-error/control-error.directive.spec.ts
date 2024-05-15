import {
  Component,
  DebugElement,
} from '@angular/core';
import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { By } from '@angular/platform-browser';

import { ControlErrorDirective } from './control-error.directive';

@Component({
  template: `
    <form [formGroup]="form">
      <div>
        <label for="name">Name</label>
        <input id="name" type="text" appControlError formControlName="name" />
      </div>
    </form>
  `,
})
class FormTestComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
    });
  }
}

describe('ControlErrorDirective', () => {
  let fixture: ComponentFixture<FormTestComponent>;
  let controls: DebugElement[];

  beforeEach(async () => {
    // Configure testing environment
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, ControlErrorDirective],
      declarations: [FormTestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormTestComponent);
    fixture.detectChanges();
    controls = fixture.debugElement.queryAll(
      By.directive(ControlErrorDirective)
    );
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should have one control', () => {
    expect(controls.length).toBe(1);
  });
});
