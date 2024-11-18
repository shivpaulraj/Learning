import { Component } from '@angular/core';

@Component({
  selector: 'app-var-let-const',
  standalone: true,
  imports: [],
  templateUrl: './var-let-const.component.html',
  styleUrl: './var-let-const.component.scss'
})
export class VarLetConstComponent {

  ngOnInit(){
    console.log(b);  //NaN Not a Number
  let a='a';
  var b;
  
  function aa(){
    let a='b';  
    console.log(a);
  }
  aa();
  console.log(a);  
  
  for(var i=0;i<5; i++){
    console.log(i);  
  }
  console.log(i);  
  
  
  }
}
