import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {
    username:'',
    password:''
  }

  constructor(private snack:MatSnackBar,private loginService :LoginService,private router: Router) { }

  ngOnInit(): void {
  }

  formSubmit() {
    console.log("Login form submitted");

    if(this.loginData.username .trim() ==null || this.loginData.username .trim() == ''){
      this.snack.open('Username is required','',{
        duration:3000,
      });
      return;
    }

    if(this.loginData.password .trim() ==null || this.loginData.password .trim() == ''){
      this.snack.open('Password is required','',{
        duration:3000,
      });
      return;
    }

    this.loginService.generateToken(this.loginData).subscribe(
      (data :any) => {
        console.log(data)
        

        this.loginService.loginUser(data.token);

        this.loginService.getCurrentUser().subscribe(
          (user :any) => {
            this.loginService.setUser(user);
            console.log(user);

            if(this.loginService.getUserRole() == 'Admin')
            {
              Swal.fire('Success', 'Successfully Logged In', 'success');
              window.location.href ='/admin';
              this.loginService.loginStatusSubject.next(true);
              // this.router.navigate(['admin']);
            }
            else if(this.loginService.getUserRole() == 'Helpdesk')
            {
              Swal.fire('Success', 'Successfully Logged In', 'success');
              window.location.href ='/helpdesk';
              this.loginService.loginStatusSubject.next(true);
              // this.router.navigate(['user']);
            }
            else
            {
              this.loginService.logout();
            }
          }
        )},
      (error) => {
        console.log(error)
        Swal.fire('Oops...', 'Something went wrong!', 'error');
      }
    );
  }
}
