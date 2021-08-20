import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UsergroupService } from 'src/app/services/usergroup.service';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  userId = 0;
  user : any;
  
  userGroup = [
    {
      groupId : '',
      groupName : ''
    },
  ];

  constructor(
    private _route : ActivatedRoute,
    private _user : UsersService,
    private _userGroup : UsergroupService,
    private snack : MatSnackBar,
    private router : Router,
    private loginService : LoginService
  ) { }

  ngOnInit(): void {

    this._userGroup.viewUserGroup().subscribe(
      (data:any) => {
      this.userGroup=data;
      console.log(this.userGroup);
    },
    (error) => {
      console.log(error);
      }
    );

    this.userId = this._route.snapshot.params.userId;
    this._user.viewSingleUser(this.userId).subscribe(
      (data:any) => {
        this.user = data;
        console.log(this.user);
      },
      (error) => {
        console.log(error);
        Swal.fire('error !!', 'Something went wrong','error');
      }
    )

  }

  formSubmit(){
    if(this.user.username.trim() == '' || this.user.username.trim() == null)
    {
        this.snack.open('User name is Required !!','',{
        duration:3000
      })
    }else{
      this._user.updateUser(this.user).subscribe(
        (data:any) => {
          Swal.fire('Success !!', 'User updated successfully','success').then((result) => {
            if(this.loginService.getUserRole() == 'Admin'){
              this.router.navigate(['admin/view-user']);
            }
            else {
              this.router.navigate(['helpdesk/view-user-helpdesk']);
            }
          });
        },
        (error: any) => {
          console.log(error);
          Swal.fire('error !!', 'Something went wrong','error');
        }
      )
    }
    return;

  }

}
