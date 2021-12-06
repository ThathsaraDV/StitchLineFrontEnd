import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import UserDTO from "../../dto/UserDTO";
import {CookieService} from "ngx-cookie";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router,private cookieService: CookieService, private userService: UserService) {
  }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.minLength(3), Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6),
      Validators.maxLength(20)]),
  });

  login() {
    this.userService.login(
      new UserDTO(
        '',
        this.loginForm.get('username')?.value.toString().trim(),
        this.loginForm.get('password')?.value.toString().trim(),
        0,
        new Date(),
        '',
        ''
      )
    ).subscribe(response => {

      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate()+1);

      const cookieOption = {
        expires: tomorrow
      };

      this.cookieService.put('userToken', response.token, cookieOption);
      this.router.navigate(['/program']);

    }, error => {
      console.log(error);
    })


  }

}
