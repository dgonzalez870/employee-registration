import {
  Component,
  HostBinding,
} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {
  @HostBinding('class') class =
    'flex flex-col items-center justify-center w-full h-full';
}
