import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './pages/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HelpdeskDashboardComponent } from './pages/helpdesk/helpdesk-dashboard/helpdesk-dashboard/helpdesk-dashboard.component';
import { HelpdeskSidebarComponent } from './pages/helpdesk/helpdesk-sidebar/helpdesk-sidebar/helpdesk-sidebar.component';
import { HelpdeskWelcomeComponent } from './pages/helpdesk/helpdesk-welcome/helpdesk-welcome/helpdesk-welcome.component';
import { AddUsergroupComponent } from './pages/usergroup/add-usergroup/add-usergroup/add-usergroup.component';
import { ViewUsergroupComponent } from './pages/usergroup/view-usergroup/view-usergroup/view-usergroup.component';
import { AddUserComponent } from './pages/user/add-user/add-user/add-user.component';
import { ViewUserComponent } from './pages/user/view-user/view-user/view-user.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import Swal from 'sweetalert2';
import { UpdateUsergroupComponent } from './pages/usergroup/update-usergroup/update-usergroup.component';
import {MatSelectModule} from '@angular/material/select';
import { UpdateUserComponent } from './pages/user/update-user/update-user.component';
import { ViewUserHelpdeskComponent } from './pages/user/view-user-helpdesk/view-user-helpdesk.component';
import { FindUsergroupComponent } from './pages/usergroup/find-usergroup/find-usergroup.component';
import { FindUserComponent } from './pages/user/find-user/find-user.component';
import { ListOfUsersComponent } from './pages/usergroup/list-of-users/list-of-users.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    HelpdeskDashboardComponent,
    HelpdeskSidebarComponent,
    HelpdeskWelcomeComponent,
    AddUsergroupComponent,
    ViewUsergroupComponent,
    AddUserComponent,
    ViewUserComponent,
    UpdateUsergroupComponent,
    UpdateUserComponent,
    ViewUserHelpdeskComponent,
    FindUsergroupComponent,
    FindUserComponent,
    ListOfUsersComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true,
    })
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
