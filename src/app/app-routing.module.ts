import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HelpdeskDashboardComponent } from './pages/helpdesk/helpdesk-dashboard/helpdesk-dashboard/helpdesk-dashboard.component';
import { HelpdeskWelcomeComponent } from './pages/helpdesk/helpdesk-welcome/helpdesk-welcome/helpdesk-welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AddUserComponent } from './pages/user/add-user/add-user/add-user.component';
import { FindUserComponent } from './pages/user/find-user/find-user.component';
import { UpdateUserComponent } from './pages/user/update-user/update-user.component';
import { ViewUserHelpdeskComponent } from './pages/user/view-user-helpdesk/view-user-helpdesk.component';
import { ViewUserComponent } from './pages/user/view-user/view-user/view-user.component';
import { AddUsergroupComponent } from './pages/usergroup/add-usergroup/add-usergroup/add-usergroup.component';
import { FindUsergroupComponent } from './pages/usergroup/find-usergroup/find-usergroup.component';
import { ListOfUsersComponent } from './pages/usergroup/list-of-users/list-of-users.component';
import { UpdateUsergroupComponent } from './pages/usergroup/update-usergroup/update-usergroup.component';
import { ViewUsergroupComponent } from './pages/usergroup/view-usergroup/view-usergroup/view-usergroup.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';

const routes: Routes = [

  {
    path: "signup",
    component: SignupComponent,
    pathMatch: 'full'
  },
  {
    path: "login",
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: "",
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: "admin",
    component: DashboardComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: "",
        component: WelcomeComponent,
      },
      {
        path: "profile",
        component: ProfileComponent,
      },
      {
        path: "view-usergroup",
        component: ViewUsergroupComponent,
      },
      {
        path: "add-usergroup",
        component: AddUsergroupComponent,
      },
      {
        path: "view-user",
        component: ViewUserComponent,
      },
      {
        path: "add-user",
        component: AddUserComponent,
      },
      {
        path: "update-usergroup/:groupId",
        component: UpdateUsergroupComponent,
      },
      {
        path: "find-usergroup/:groupId",
        component: FindUsergroupComponent,
      },
      {
        path: "find-user/:userId",
        component: FindUserComponent,
      },
      {
        path: "view-users-of-usergroup/:groupId",
        component: ListOfUsersComponent,
      },
      {
        path: "update-user/:userId",
        component: UpdateUserComponent,
      },
    ],
  },
  {
    path: "helpdesk",
    component: HelpdeskDashboardComponent,
    canActivate: [NormalGuard],
    children: [
      {
        path: "",
        component: HelpdeskWelcomeComponent,
      },
      {
        path: "profile",
        component: ProfileComponent,
      },
      {
        path: "view-user-helpdesk",
        component: ViewUserHelpdeskComponent,
      },
      {
        path: "add-user",
        component: AddUserComponent,
      },
      {
        path: "update-user/:userId",
        component: UpdateUserComponent,
      },
      {
        path: "find-user/:userId",
        component: FindUserComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
