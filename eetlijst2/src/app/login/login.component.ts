import { Component, OnInit } from '@angular/core';
import {LoginService} from '../service/login.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {Account} from '../shared/account'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  angForm: FormGroup;

  
  constructor(private fb: FormBuilder,private _login: LoginService) {
    this.createForm();
   }

  ngOnInit() {
  }

  onClickSubmit(username,password) {
   let account =  Object.assign(new Account(), {
      Username: username,
      Password : password

  })
    this._login.login(account)
 }

  createForm() {
    this.angForm = this.fb.group({
       username: ['', Validators.required ],
       password: ['', Validators.required ]
    });
  }
}
