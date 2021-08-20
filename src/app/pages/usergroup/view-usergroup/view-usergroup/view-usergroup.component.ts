import { Component, OnInit } from '@angular/core';
import { UsergroupService } from 'src/app/services/usergroup.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-usergroup',
  templateUrl: './view-usergroup.component.html',
  styleUrls: ['./view-usergroup.component.css']
})
export class ViewUsergroupComponent implements OnInit {

  public userGroup = [
    {
      groupId : '',
      groupName : '',
      groupType : '',
      groupDescription : '',
      groupEmail : ''
    }
  ]
     
     constructor(private _userGroupService : UsergroupService) { }

  ngOnInit(): void {

    this._userGroupService.viewUserGroup().subscribe(
      (data :any) => {
        this.userGroup=data;
        console.log(this.userGroup);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!','Error is loading data','error');
      }
    )
  }

  deleteUserGroup(groupId : any){
    Swal.fire({
      icon :'info',
      title : 'Are you sure',
      confirmButtonText: 'Delete',
      showCancelButton : true
    }).then((result) => {

      if(result.isConfirmed){
        this._userGroupService.deleteUserGroup(groupId).subscribe(
          (data:any) => {
          this.userGroup = this.userGroup.filter((userGroup) => userGroup.groupId != groupId)
          Swal.fire('Success', 'UserGroup Successfully Deleted', 'success');
        },
        (error) => {
          console.log(error);
          Swal.fire('Error !!','Error is loading data','error');
        });
      }
      
    });

  }

}
