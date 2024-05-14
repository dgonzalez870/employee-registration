import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

import { StatusInfo } from './status-info.service';

@Component({
  selector: 'app-status-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status-info.component.html',
  styleUrl: './status-info.component.scss',
})
export class StatusInfoComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log({ changes });
  }

  @Input() status: StatusInfo | null = null;
  @Input() message!: string;
  @Input() statusType: 'ERROR' | 'SUCCESS' | null = null;

  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
