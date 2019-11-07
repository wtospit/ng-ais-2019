import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/serivces/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService, 
    private router: Router
  ) { }

  ngOnInit() {
    // this.loginForm = new FormGroup({
    //   username: new FormControl(''),
    //   password: new FormControl(''),
    // });
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      password: ''
    })
  }

  login() {
    this.authService.login(this.loginForm.value)
      .subscribe((res) => {
        this.authService.setToken(res.token);
        this.router.navigate(['/admin']);
      },
      (err) => {
        console.log(err);
        alert(err.message);
      });
  }

  get loginTxt() {
    return this.loginForm.get("login");
  }

}
