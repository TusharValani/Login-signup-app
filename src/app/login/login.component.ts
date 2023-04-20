import { Component } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  login:FormGroup | any;
  constructor () {

  }

  ngOnInit(): void{
    this.login = new FormGroup({
      'email' : new FormControl(),
      'password' : new FormControl()
    })
  }

  logindata(login:FormGroup){
    console.log(this.login.value);
    this.login.reset();
  }
}
