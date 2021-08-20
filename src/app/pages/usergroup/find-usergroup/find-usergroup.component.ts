import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UsergroupService } from 'src/app/services/usergroup.service';

@Component({
  selector: 'app-find-usergroup',
  templateUrl: './find-usergroup.component.html',
  styleUrls: ['./find-usergroup.component.css']
})
export class FindUsergroupComponent implements OnInit {

  groupId = 0;
  userGroup :any;

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

}
