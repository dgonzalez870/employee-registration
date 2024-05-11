import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

import { EmployeeInfo } from '../models/employee-info';

@Component({
  selector: 'app-employees-info-card',
  standalone: true,
  imports: [],
  templateUrl: './employees-info-card.component.html',
  styleUrl: './employees-info-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesInfoCardComponent {
  @HostBinding('class') class = 'block';

  @Input() data!: EmployeeInfo;
}
