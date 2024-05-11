import {
  Component,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'app-employees-info-card',
  standalone: true,
  imports: [],
  templateUrl: './employees-info-card.component.html',
  styleUrl: './employees-info-card.component.scss'
})
export class EmployeesInfoCardComponent {

  @HostBinding('class') class = 'block';
}
