import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookflightComponent } from './bookflight/bookflight.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import {UserdashboardComponent} from './userdashboard/userdashboard.component';
import {UserbookingComponent} from './userbooking/userbooking.component';
import {AddflightComponent} from './addflight/addflight.component';
import {AdmindashboardComponent} from './admindashboard/admindashboard.component';
import {ViewflightComponent} from './viewflight/viewflight.component';
import {BookconformComponent} from './bookconform/bookconform.component';
import {TraveldetailComponent} from './traveldetail/traveldetail.component';
import {UserprofileComponent} from './userprofile/userprofile.component';
import {UpdateflightComponent} from './updateflight/updateflight.component';

const routes: Routes = [
  {path : '', component: HomeComponent},
  { path: 'searchflight', component: SearchComponent},
  {path : 'viewdetails', component: ViewdetailsComponent},
  {path: 'bookflight/:fid', component: BookflightComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'dashBoard/:uname', component: UserdashboardComponent},
  {path: 'userbooking/:username', component: UserbookingComponent},
  {path: 'addflight', component: AddflightComponent},
  {path: 'admindashboard/:data', component: AdmindashboardComponent},
  {path: 'viewflight', component: ViewflightComponent},
  {path: 'bookconform/:bkid', component: BookconformComponent},
  {path: 'traveldetail/:bkid', component: TraveldetailComponent},
  {path :'userprofile/:uname', component: UserprofileComponent},
  {path: 'updateflight/:id', component: UpdateflightComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
