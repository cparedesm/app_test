import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  private minLength: number = 5

  readonly errors: {[key: string]: string} = {
    required: "Este campo es requerido",
    email: "Debe introducir un email válido",
    minlength: `Este campo debe contener al menos ${this.minLength} caracteres`
  }
  showErrors: boolean = false;
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(this.minLength)]],
      remember: [false]
    })
  }

  get email(): AbstractControl {
    return this.form.controls.email;
  }

  get password(): AbstractControl {
    return this.form.controls.password;
  }

  submitForm() {
    if (this.form.invalid) {
      this.showErrors = true;
      return
    }

    console.log('Ok!');
  }

  getError(errors: ValidationErrors) {
    const firstError = Object.keys(errors)[0];

    return this.errors[firstError]
  }


}
