import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
    type: [null, Validators.required]
  });

  // hasUnitNumber = false;

  states = [
    {name: 'Alabama', abbreviation: 'AL'}
  ];

  constructor(private formBuilder: FormBuilder) {}

  onSubmit() {
    console.log(this.movementForm.value);
  }

  hasErrors(controlName: string) {
    return this.movementForm.controls[controlName].invalid;
  }

  isTouched(controlName: string) {
    return this.movementForm.controls[controlName].touched;
  }

  hasError(controlName: string, errorName: string) {
    const control = this.movementForm.controls[controlName];
    return control.hasError(errorName);
  }
}
