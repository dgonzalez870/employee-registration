import {
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

/**
 * This component is used to confirm a delete Employee action.
 */
@Component({
  selector: 'app-delete-confirm',
  standalone: true,
  imports: [],
  templateUrl: './delete-confirm.component.html',
  styleUrl: './delete-confirm.component.scss',
})
export class DeleteConfirmComponent {
  @Output() confirm = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  onConfirm() {
    this.confirm.emit();
  }

  onCancel() {
    this.cancel.emit();
  }
}
