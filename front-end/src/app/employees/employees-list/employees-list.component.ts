import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
} from '@angular/core';

import {
  EmployeesInfoCardComponent,
} from './employees-info-card/employees-info-card.component';
import { EmployeesListService } from './employees-list.service';

@Component({
  selector: 'app-employees-list',
  standalone: true,
  imports: [EmployeesInfoCardComponent, CommonModule],
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.scss',
})
export class EmployeesListComponent implements OnInit {
  public employees$ = this.employeesListService.getEmployees$();

  constructor(private employeesListService: EmployeesListService) {}

  ngOnInit(): void {
    this.employeesListService.searchEmployees();
  }
}
