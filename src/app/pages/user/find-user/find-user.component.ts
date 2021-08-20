import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Console } from 'console';
import { UsergroupService } from 'src/app/services/usergroup.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-find-user',
  templateUrl: './find-user.component.html',
  styleUrls: ['./find-user.component.css']
})
export class FindUserComponent implements OnInit {

  userId = 0;

  user = {

    userId : '',
    username : '',
    firstName : '',
    lastName : '',
    emailId : '',
    role : '',
    enabled : '',
    userGroupId : '',
  };

  userGroup = {
      groupId : '',
      groupName : ''
    
  };
  groupId : any;

  constructor(
    private _route : ActivatedRoute,
    private _user : UsersService,
    private _userGroup : UsergroupService
  ) { }

  ngOnInit(): void {

    this.userId =  this._route.snapshot.params.userId;
    this._user.viewSingleUser(this.userId).subscribe(
      (data : any) => {
        this.user = data;
        console.log(this.user);

        this._userGroup.viewSingleUserGroup(this.user.userGroupId).subscribe(
          (data : any) => {
            this.userGroup = data;
            console.log(this.userGroup);
          },
          (error) => {
            console.log(error);
          }
        )
      },
      (error) => {
        console.log(error);
      }
    )

  }

}
