import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss'
})
export class FirstComponent {
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
