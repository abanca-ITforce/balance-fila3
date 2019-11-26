import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor() { }

  hasError(form: FormGroup, controlName: string, errorName: string ) {
    const control = form.controls[controlName];
    return control.hasError(errorName);
  }
  isTouched(form: FormGroup, controlName: string) {
    return form.controls[controlName].touched;
  }
  hasErrors(form: FormGroup, controlName: string) {
    return form.controls[controlName].invalid;
  }

}
