import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';

import { FormcontrolUiDirective } from '../formcontrol-ui';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [FormcontrolUiDirective],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorComponent {
  @HostBinding('class') classes = 'flex';

  @Input() totalPages = 1;
  @Input() currentPage = 1;

  @Output() pageChange = new EventEmitter<number>();

  onPageChange(event: string) {
    switch (event) {
      case 'start':
        this.currentPage = 1;
        break;
      case 'prev':
        if (this.currentPage > 1) {
          this.currentPage--;
        }
        break;
      case 'next':
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
        }
        break;
      case 'end':
        this.currentPage = this.totalPages;
        break;
    }
    this.pageChange.emit(this.currentPage);
  }
}
