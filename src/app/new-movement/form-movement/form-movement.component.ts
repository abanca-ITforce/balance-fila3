import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MovementsService } from 'src/app/movements.service';
import { FormsService } from 'src/app/forms.service';
import { Router } from '@angular/router';

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

  dateForm: Date;
  seleccionador: string;
  entry = ['Nómina', 'Alquiler', 'Participaciones Bankia'];
  expenditure = ['Comida', 'Gasolina', 'Cursos'];

  @Output() post = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder,
              private movementsService: MovementsService,
              private formsService: FormsService,
              private router: Router) {}

  onSubmit() {
    // console.log(new Date(this.movementForm.get('date').value));
    // this.dateForm = new Date(this.movementForm.get('date').value);
    // this.movementsService.postMovement(this.movementForm.value);
    this.post.emit(this.movementForm.value);
    this.router.navigate(['/movements']);
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
