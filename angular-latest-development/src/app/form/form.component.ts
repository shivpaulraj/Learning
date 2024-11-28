import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
// @Component({
//   selector: 'app-first',
//   standalone: true,
//   imports: [],
//   templateUrl: './form.component.html',
//   styleUrl: './form.component.scss'
// })
// export class FormComponent {
// password: any;
// SubmitForm() {
//  if(this.profileForm.valid){
//   console.log(this.profileForm);
//  }
// }
// Define a function with two regular parameters and one rest parameter:
//login 
//home
// profileForm:FormGroup;
// constructor(){
//   this.profileForm=new FormGroup({
//     userID:new FormControl(''), 
//     password:new FormControl('')
//   })
// }

// }


@Component({
  selector: 'app-login',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  standalone: true,
  imports: [
    NgIf
],
})
export class FormComponent {
  password: any;
SubmitForm() {
 if(this.profileForm.valid){
  console.log(this.profileForm);
 }
}


  profileForm:FormGroup;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm=new FormGroup({
      userID:new FormControl(''), 
      password:new FormControl('')
    })

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Form Submitted:', this.loginForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
