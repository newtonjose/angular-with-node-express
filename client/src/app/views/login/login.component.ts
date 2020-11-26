import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public formLogin!: FormGroup;

  constructor(
    private formBilder: FormBuilder,
    private api: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formLogin = this.formBilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  submit() {
    if (this.formLogin.valid) {
      console.log(this.formLogin.value);
      this.api
        .postLogin(this.formLogin.value)
        .toPromise()
        .then(() => {
          this.router.navigate(['/cursos']);
          this.formLogin.reset();
        })
        .catch((error) => {
          console.log({ error });
        });
    }
  }
}
