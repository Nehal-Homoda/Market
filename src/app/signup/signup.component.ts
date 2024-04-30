import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  userReg: FormGroup;
  constructor(private fb: FormBuilder) {
    this.userReg = this.fb.group({
      firstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Email: ['', Validators.required],
      Password: ['', Validators.required],
      ConfirmedPassword: ['', Validators.required],
    });
  }
  get fisrtName() {
    return this.userReg.get('firstName');
  }
  get lastName() {
    return this.userReg.get('LastName');
  }
  get email(){
    return this.userReg.get('Email');
  }
  get password(){
    return this.userReg.get('Password');

  }
  get confirmedPassword(){
    return this.userReg.get('ConfirmedPassword');
  }
}
