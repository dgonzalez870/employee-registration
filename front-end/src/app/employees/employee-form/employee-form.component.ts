import { CommonModule } from '@angular/common';
import {
  Component,
  HostBinding,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

import {
  filter,
  Subscription,
} from 'rxjs';

import {
  ControlErrorDirective,
} from '../../lib/control-error/control-error.directive';
import { FormcontrolUiDirective } from '../../lib/formcontrol-ui';
import { EmployeeFormService } from './employee-form.service';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormcontrolUiDirective, CommonModule, ControlErrorDirective],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.scss',
})
export class EmployeeFormComponent implements OnInit, OnDestroy {
  @HostBinding('class') classes = 'block';

  countries$ = this.employeeFormService.getCountries$();
  documents$ = this.employeeFormService.getDocuments$();
  jobAreas$ = this.employeeFormService.getJobAreas$();

  NameValidators = [
    Validators.required,
    Validators.maxLength(20),
    Validators.pattern('[A-Z\\s]*'),
  ];

  form = this.formBuilder.group({
    first_surname: ['', this.NameValidators],
    second_surname: ['', this.NameValidators],
    first_name: ['', this.NameValidators],
    other_names: ['', Validators.maxLength(50)],
    country_id: ['', Validators.required],
    id_document_id: ['', Validators.required],
    id_code: [
      '',
      [
        Validators.required,
        Validators.maxLength(20),
        Validators.pattern('[A-Za-z0-9]*'),
      ],
    ],
    email: [{ value: '', disabled: true }, [Validators.email]],
    job_area_id: ['', Validators.required],
    admission_date: ['', [Validators.required]],
  });

  submitDisabled = true;

  private sub$ = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private employeeFormService: EmployeeFormService
  ) {}

  ngOnInit(): void {
    this.employeeFormService.loadSelectOptions();

    this.sub$.add(
      this.activatedRoute.params.subscribe((params) => {
        const id = params['id'];
        if (id) {
          this.employeeFormService.loadEmployee(id);
        }
      })
    );

    this.sub$.add(
      this.employeeFormService
        .getEmployee$()
        .pipe(filter((val) => !!val))
        .subscribe((employee) => {
          this.form.patchValue(employee as any, { emitEvent: false });
        })
    );

    this.sub$.add(
      this.form.statusChanges.subscribe(
        (status) => (this.submitDisabled = status === 'INVALID')
      )
    );
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  save(): void {
    this.submitDisabled = true;
    this.employeeFormService.createEmployee(this.form.value as any);
  }

  onCancel(): void {
    this.router.navigate(['/employees'], {
      queryParamsHandling: 'merge',
    });
  }
}
