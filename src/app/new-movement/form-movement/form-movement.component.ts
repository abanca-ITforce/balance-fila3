import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MovementsService } from 'src/app/movements.service';
import { FormsService } from 'src/app/forms.service';

@Component({
  selector: 'bal-form-movement',
  templateUrl: './form-movement.component.html',
  styleUrls: ['./form-movement.component.css']
})
export class FormMovementComponent {
  movementForm = this.formBuilder.group({
    date: [null, Validators.required],
    description: [null, [Validators.required, Validators.maxLength(30)]],
    amount: [null, [Validators.required, Validators.min(10)]],
    type: [null, Validators.required],
    selector: [null, Validators.required]
  });


  seleccionador: string;
  entry = ['Nómina', 'Alquiler', 'Participaciones Bankia'];
  expenditure = ['Comida', 'Gasolina', 'Cursos'];


  constructor(private formBuilder: FormBuilder,
              private movementsService: MovementsService,
              private formsService: FormsService) {}

  onSubmit() {
    this.movementsService.postMovement(this.movementForm.value);
  }

  hasErrors(controlName: string) {
    return this.formsService.hasErrors(this.movementForm, controlName);
  }

  isTouched(controlName: string) {
    return this.formsService.isTouched(this.movementForm, controlName);
  }/** */

  hasError(controlName: string, errorName: string) {
    return this.formsService.hasError(this.movementForm, controlName, errorName);
  }/**/

  getArray(arrayName: string) {
    if (arrayName === 'entry') {
      return this.entry;
    } else {
      return this.expenditure;
    }
  }
}
