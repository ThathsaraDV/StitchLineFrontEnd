import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import UserDTO from "../../dto/UserDTO";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  loading=false;

  signUpForm = new FormGroup({
    name: new FormControl('', [Validators.minLength(3), Validators.required]),
    username: new FormControl('', [Validators.minLength(3), Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6),
      Validators.maxLength(20)]),
    mobile_number: new FormControl('', [Validators.required, Validators.pattern('(0)[0-9]{9}')]),
    date_of_birth: new FormControl('', [Validators.required ]),
    gender: new FormControl('', [Validators.required ]),
    language: new FormControl('', [Validators.required ])
  });

  register() {
    this.loading=true;

    console.log("register method");

    const dto = new UserDTO(
      this.signUpForm.get('name')?.value.toString().trim(),
      this.signUpForm.get('username')?.value.toString().trim(),
      this.signUpForm.get('password')?.value.toString().trim(),
      this.signUpForm.get('mobile_number')?.value.toString().trim(),
      this.signUpForm.get('date_of_birth')?.value,
      this.signUpForm.get('gender')?.value.toString().trim(),
      this.signUpForm.get('language')?.value.toString().trim()

    );

    this.userService.register(dto).subscribe(response => {
      this.loading=false;
      this.router.navigate(['/auth/login']);
    }, error => {
      this.loading=false;
      console.log(error);
    })

  }

}
