import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  SignUP:FormGroup | any;
  constructor(){

  }

  ngOnInit(): void{
    this.SignUP = new FormGroup({
      'fname' : new FormControl(),
      'lname': new FormControl(),
      'phone' : new FormControl(),
      'email' : new FormControl(),
      'password' : new FormControl()
    })
  }

  Signupdata(SignUP:FormGroup){
    console.log(this.SignUP.value);
    this.SignUP.reset()
  }

  // sbtn(){
  //   // this.router.navigate(['login']);
  // }
}
