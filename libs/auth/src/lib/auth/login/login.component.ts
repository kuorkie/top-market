import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";

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
    private router: Router) {

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
    this.router.navigate(['admin-dashboard'])
  }
}
