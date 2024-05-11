import { Component } from '@angular/core';

import {
  EmployeesInfoCardComponent,
} from './employees-info-card/employees-info-card.component';

@Component({
  selector: 'app-employees-list',
  standalone: true,
  imports: [EmployeesInfoCardComponent],
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.scss',
})
export class EmployeesListComponent {}
