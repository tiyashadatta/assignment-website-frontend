import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService,private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  public user = {
      username : '',
      password : '',
      firstName : '',
      lastName : '',
      emailId : '',
      phone : ''
  };

  formSubmit(){

    console.log(this.user);

    if(this.user.username == '' || this.user.username == null)
    {
      //alert('Username is required');
      this.snack.open('Username is required','ok',{
        duration:3000,
        verticalPosition:'top',
        horizontalPosition:'right'
        
      });
      return;
    }

    this.userService.addUser(this.user).subscribe(
      (data:any)=>{
        console.log(data);
        //alert('Successful registration')
        Swal.fire( 'Successfully Registered','UserID is '+ data.id, 'success');
      },
      (error)=>{
        console.log(error);
        //alert('Something went wrong')
        Swal.fire('Oops...', 'Something went wrong!', 'error');
      }
    );
  }
}