import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UsergroupService } from 'src/app/services/usergroup.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-usergroup',
  templateUrl: './update-usergroup.component.html',
  styleUrls: ['./update-usergroup.component.css']
})
export class UpdateUsergroupComponent implements OnInit {

  userGroup: any;
  groupId = 0;

  constructor(
    private _route : ActivatedRoute,
    private _userGroup : UsergroupService,
    private snack : MatSnackBar,
    private router : Router
    ) { }

  ngOnInit(): void {

    this.groupId = this._route.snapshot.params.groupId;
    this._userGroup.viewSingleUserGroup(this.groupId).subscribe(
      (data:any) => {
        this.userGroup = data;
        console.log(this.userGroup)
      },
      (error) => {
        console.log(error);
      }
    )
  
  }

  formSubmit(){

    if(this.userGroup.groupName.trim() == '' || this.userGroup.groupName == null)
    {
        this.snack.open('User Group Name is Required !!','',{
        duration:3000
      })
    }else{
      this._userGroup.updateUserGroup(this.userGroup).subscribe(
        (data:any) => {
          Swal.fire('Success !!', 'UserGroup updated successfully','success').then((result) => {
            this.router.navigate(['/admin/view-usergroup'])
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
