import {
  Component,
  Input,
} from '@angular/core';
import { FormControlName } from '@angular/forms';

@Component({
  selector: 'app-control-error',
  standalone: true,
  imports: [],
  templateUrl: './control-error.component.html',
  styleUrl: './control-error.component.scss',
})
export class ControlErrorComponent {
  @Input() control!: FormControlName;

  private ErrorMessages = {
    required: 'Este campo es requerido',
    maxlength: 'El campo admite máximo',
  };

  private PatternErrors: { [key: string]: string } = {
    '^[A-Z\\s]*$': 'Solo letras mayúsculas',
    '^[A-Z0-9\\s]*$': 'Solo letras mayúsculas y números',
  };

  getErrorMessage(): string {
    if (this.control.hasError('pattern')) {
      return this.PatternErrors[
        this.control.getError('pattern').requiredPattern
      ];
    }

    if (this.control.hasError('required')) {
      return this.ErrorMessages.required;
    }

    if (this.control.hasError('maxlength')) {
      const errorMessage = this.ErrorMessages.maxlength;
      const max = this.control.getError('maxlength').requiredLength;
      return `${errorMessage} ${max} caracteres`;
    }

    return JSON.stringify(this.control.errors);
  }
}
