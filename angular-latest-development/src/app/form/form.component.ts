import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
password: any;
SubmitForm() {
 if(this.profileForm.valid){
  console.log(this.profileForm);
 }
}
// Define a function with two regular parameters and one rest parameter:
//login 
//home
profileForm:FormGroup;
constructor(){
  this.profileForm=new FormGroup({
    userID:new FormControl(''), 
    password:new FormControl('')
  })
}

}
