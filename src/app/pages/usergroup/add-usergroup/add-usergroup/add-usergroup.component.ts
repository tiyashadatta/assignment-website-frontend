import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsergroupService } from 'src/app/services/usergroup.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-usergroup',
  templateUrl: './add-usergroup.component.html',
  styleUrls: ['./add-usergroup.component.css']
})
export class AddUsergroupComponent implements OnInit {

  public userGroup = 
    {
      groupName : '',
      groupType : '',
      groupDescription : '',
      groupEmail : ''
    }

  constructor(private _userGroupService : UsergroupService
    ,private snack : MatSnackBar) { }

  ngOnInit(): void {
  }

  formSubmit(){

    if(this.userGroup.groupName.trim() == '' || this.userGroup.groupName == null){
      this.snack.open('Group Name is Required !!','',{
        duration:3000
      })
    }
    else{
      this._userGroupService.addUserGroup(this.userGroup).subscribe(
        (data:any) => {
          this.userGroup.groupName = '';
          this.userGroup.groupType = '';
          this.userGroup.groupDescription = '';
          this.userGroup.groupEmail = '';
          Swal.fire('Success !!', 'UserGroup added successfully','success');
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
