import { CommonModule } from '@angular/common';
import {
  Component,
  HostBinding,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss',
  providers: [],
})
export class EmployeesComponent {
  @HostBinding('class') class = 'block grow';
}
