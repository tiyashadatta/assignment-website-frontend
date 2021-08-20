import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsergroupService } from 'src/app/services/usergroup.service';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userGroup = [
    {
      groupId : '',
      groupName : ''
    },
  ];

  userData = {
    userId : '',
    username : '',
    firstName : '',
    lastName : '',
    emailId : '',
    role : '',
    enabled : true,
    userGroupId : '',
  };

  constructor(
    private _userGroup : UsergroupService,
    private _user : UsersService, 
    private snack : MatSnackBar
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
  }

  formSubmit()
  {
    if(this.userData.username.trim() == '' || this.userData.username.trim() == null)
    {
        this.snack.open('User name is Required !!','',{
        duration:3000
      })
    }else{
      this._user.addUser(this.userData).subscribe(
        (data:any) => {
          Swal.fire('Success !!', 'User added successfully','success');
          this.userData = {
            userId : '',
            username : '',
            firstName : '',
            lastName : '',
            emailId : '',
            role : '',
            enabled : true,
            userGroupId : '',
          };
        },
        (error) => {
          console.log(error);
          Swal.fire('error !!', 'Something went wrong','error');
        }
      )
    }
    return;
  }

}
