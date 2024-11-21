import { Component } from '@angular/core';
import e from 'express';

@Component({
  selector: 'app-callback-promise',
  standalone: true,
  imports: [],
  templateUrl: './callback-promise.component.html',
  styleUrl: './callback-promise.component.scss'
})
export class CallbackPromiseComponent {

  ngOnInit() {
    
    let [a, b] = [9, 6];// 
    let getresult = this.sumNum(a, b);
    console.log("getresult",getresult);
    this.sumNumCallBack(a, b, function (getresults: number) {
      console.log("getresults Callback", getresults / 3);
    })

    this.sumPromise(5, 10).then((result: number) => {
      console.log(result / 3);
    }).catch((err: any)=>{
      console.log(err);
    })
  }

  sumNum(c: number, d: number): number | any {
    setTimeout(() => {
      return c + d;
    }
      , 1000)
  }

  //CallBack for Async Function


  sumNumCallBack(c: number, d: number, AsyncFunction: any): number | any {

    setTimeout(() => {
      AsyncFunction(c + d);
    }
      , 1500)
  }

  //Promise Function
  sumPromise(c: number, d: number): Promise<number> | any {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(c + d);
      }
        , 1500)
    })
  }
}