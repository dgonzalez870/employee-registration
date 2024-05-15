import {
  ChangeDetectionStrategy,
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'front-end';

  status: 'ERROR' | 'SUCCESS' | null = null;
  statusMessage: string | null = null;
  loading: boolean = false;

  private sub$ = new Subscription();

  constructor(
    private statusInfoService: StatusInfoService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.sub$.add(
      this.statusInfoService.getStatusInfo$().subscribe((status) => {
        this.status = status?.status ?? null;
        this.statusMessage = status?.message ?? null;
        this.cdr.detectChanges();
      })
    );

    this.sub$.add(
      this.statusInfoService.getLoading$().subscribe((loading) => {
        this.cdr.detectChanges();
      })
    );
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  closeInfo(): void {
    this.status = null;
    this.statusMessage = null;
    this.cdr.detectChanges();
  }
}
