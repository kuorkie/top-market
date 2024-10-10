import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../../../../shared/src/lib/shared/services/user.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit  {
  profileForm;
  sidebarVisible: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,private userService:UserService) {

    this.profileForm = this.formBuilder.group({
      userName: new FormControl<string | null>('', [Validators.required]),
      passWord: new FormControl<string | null>('', [Validators.required]),
      rememberMe: new FormControl<boolean>(false)
    });
  }
  ngOnInit(): void {

  }

  onSubmit() {
    localStorage.setItem('hh','true')
    let body = {
      "id": 0,
      "clientTypeId": 0,
      "clientTypeName": "string",
      "firstName": "string",
      "lastName": "string",
      "middleName": "string",
      "fullName": "string",
      "accountName":'77052573857',
      "dob": "2024-10-08T11:52:02.025Z",
      "systemUser": true,
      "psw": "string",
      "email": "string",
      "refreshToken": "string",
      "blocked": true,
      "arc": true,
      "createTime": "2024-10-08T11:52:02.025Z",
      "orgId": 0,
      "createdErp": true,
      "createdExtDb": true,
      "codeFromErp": "string"
    }
    this.userService.login(body).subscribe(value => {

      localStorage.setItem('data', JSON.stringify({
        token: value.token,
        userName: this.profileForm.get('userName')?.value,
        expiresIn:value.expiresIn
      }));
      this.userService.setIsLoggedIn(true);
      this.router.navigate(['admin-dashboard'])

    })
  }
}
