import {
  Component,
  DebugElement,
} from '@angular/core';
import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FormcontrolUiDirective } from './formcontrol-ui.directive';

@Component({
  template: `
    <form>
      <div>
        <label for="name">Name</label>
        <input id="name" type="text" appFormcontrolUi />
      </div>
    </form>
  `,
})
class FormTestComponent {}

describe('FormcontrolUiDirective', () => {
  let fixture: ComponentFixture<FormTestComponent>;
  let controls: DebugElement[];

  beforeEach(async () => {
    // Configure testing environment
    TestBed.configureTestingModule({
      imports: [FormcontrolUiDirective],
      declarations: [FormTestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormTestComponent);
    fixture.detectChanges();
    controls = fixture.debugElement.queryAll(
      By.directive(FormcontrolUiDirective)
    );
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should have one control', () => {
    expect(controls.length).toBe(1);
  });

  // it('should have the defined css class', () => {
  //   const control = controls[0];
  //   expect(control.nativeElement.classList.contains(['p-2', 'border', 'border-slate-950', 'rounded'])).toBe(true);
  // });
});
