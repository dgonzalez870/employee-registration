import { ComponentFixture, TestBed } from '@angular/core/testing';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
