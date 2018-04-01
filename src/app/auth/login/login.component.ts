import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

// import * as sweetalert  from 'sweetalert';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private creds;


  constructor(
    private _router: Router,
    private _authService: AuthService
  ) { }

  ngOnInit() {
    this.creds = {
      username: "",
      password: ""
    };

    this._authService.is_authed().subscribe(_data => {
      this._router.navigate(['/home']);
    })

  }

  ngAfterViewChecked() {
    //this._router.navigate(['/home']);
  }

  submit() {

    this._authService.login(this.creds).subscribe(_res => {
      swal({
        title: "Hola, "+ _res.first + "!",
        text: "",
        type: "success",
      });
      this._router.navigate(['/home']);

    }, err => {
      swal({
        title: "Unauthorized!",
        text: "Invalid username or password.",
        type: "error",
      });
    })
  }

}
