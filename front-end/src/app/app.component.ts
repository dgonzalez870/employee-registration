import {
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Subscription } from 'rxjs';

import { StatusInfoComponent } from './lib/status-info/status-info.component';
import { StatusInfoService } from './lib/status-info/status-info.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StatusInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'front-end';

  status: 'ERROR' | 'SUCCESS' | null = null;
  statusMessage: string | null = null;

  private sub$ = new Subscription();

  constructor(
    private statusInfoService: StatusInfoService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    console.log('init app....');
    this.sub$.add(
      this.statusInfoService
        .getStatusInfo$()
        // .pipe(filter((val) => !!val))
        .subscribe((status) => {
          console.log({ status });
          this.status = status?.status ?? null;
          this.statusMessage = status?.message ?? null;
          this.cdr.markForCheck();
        })
    );
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
}
