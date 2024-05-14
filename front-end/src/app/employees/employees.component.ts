import { CommonModule } from '@angular/common';
import {
  Component,
  HostBinding,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { StatusInfoComponent } from '../lib/status-info/status-info.component';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [RouterOutlet, CommonModule, StatusInfoComponent],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss',
  providers: [],
})
export class EmployeesComponent{
  @HostBinding('class') class = 'block grow';

}
