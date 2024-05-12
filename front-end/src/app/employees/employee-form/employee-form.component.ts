import {
  CommonModule,
  Location,
} from '@angular/common';
import {
  Component,
  HostBinding,
} from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { FormcontrolUiDirective } from '../../lib/formcontrol-ui';
import {
  LoadCountriesService,
} from '../services/load-countries/load-countries.service';
import {
  LoadDocumentsService,
} from '../services/load-documents/load-documents.service';
import {
  LoadJobAreasService,
} from '../services/load-job-areas/load-job-areas.service';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormcontrolUiDirective, CommonModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.scss',
})
export class EmployeeFormComponent {
  @HostBinding('class') classes = 'block';

  countries$ = this.loadCountriesService.exec();
  documents$ = this.loadDocumentsService.exec();
  jobAreas$ = this.loadJobAreasService.exec();

  NameValidators = [
    Validators.required,
    Validators.maxLength(20),
    Validators.pattern('[A-Z\\s]*'),
  ];

  public form = this.formBuilder.group({
    first_name: ['', this.NameValidators],
    first_surname: ['', this.NameValidators],
    second_surname: ['', this.NameValidators],
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
    job_area_id: ['', Validators.required],
    other_names: ['', Validators.maxLength(50)],
  });

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private loadCountriesService: LoadCountriesService,
    private loadDocumentsService: LoadDocumentsService,
    private loadJobAreasService: LoadJobAreasService
  ) {}

  save(): void {}

  onCancel(): void {
    this.location.back();
  }
}
