import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  public user = [
    {
        userId : '',
        username : '',
        firstName : '',
        lastName : '',
        emailId : '',
        role : '',
        enabled : ''
    }
  ]

  constructor(
    private _user : UsersService,
    private loginService : LoginService,
    private router : Router
  ) { }

  ngOnInit(): void {

    this._user.viewAllUsers().subscribe(
      (data :any) => {
        this.user=data;
        console.log(this.user);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!','Error is loading data','error');
      }
    )
  }

  deleteUser(userId : any){
    Swal.fire({
      icon :'info',
      title : 'Are you sure',
      confirmButtonText: 'Delete',
      showCancelButton : true
    }).then((result) => {

      if(result.isConfirmed){
        this._user.deleteUser(userId).subscribe(
          (data:any) => {
          this.user= this.user.filter((user) => user.userId != userId)
          Swal.fire('Success', 'UserGroup Successfully Deleted', 'success');
        },
        (error) => {
          console.log(error);
          Swal.fire('Error !!','Error is loading data','error');
        });
      }
      
    });

  }

  public openPage(){
    if(this.loginService.getUserRole() == 'Admin'){
      this.router.navigate(['admin/add-user']);
    }
    else {
      this.router.navigate(['helpdesk/add-user']);
    }
  }

}
