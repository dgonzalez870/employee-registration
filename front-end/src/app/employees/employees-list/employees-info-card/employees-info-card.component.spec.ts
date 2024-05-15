import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { EmployeesInfoCardComponent } from './employees-info-card.component';

describe('EmployeesInfoCardComponent', () => {
  let component: EmployeesInfoCardComponent;
  let fixture: ComponentFixture<EmployeesInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeesInfoCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesInfoCardComponent);
    component = fixture.componentInstance;
    component.data = {
      id: 1,
      country: 'Test',
      name: 'Test',
      document: 'Passport',
      email: 'XXXXXXXXXXXXX',
      idCode: '000000000000',
      jobArea: '000000000000',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
