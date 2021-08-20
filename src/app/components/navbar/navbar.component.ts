import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;
  user = null;

  constructor(public loginService : LoginService,private router:Router) { }

  ngOnInit(): void {

    this.isLoggedIn = this.loginService.isLoggedIn();
    this.user = this.loginService.getUser();
    this.loginService.loginStatusSubject.asObservable().subscribe(data => {
      this.isLoggedIn = this.loginService.isLoggedIn();
      this.user = this.loginService.getUser();
    })
  }

  public logout(){
    this.loginService.logout();
    window.location.reload(); 
    // this.loginService.loginStatusSubject.next(false);
  }

  public openProfile(){
    if(this.loginService.getUserRole() == 'Admin'){
      this.router.navigate(['admin/profile']);
    }
    else {
      this.router.navigate(['helpdesk/profile']);
    }
  }

}
