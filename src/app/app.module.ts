import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SearchService} from './search.service';
import { BookflightComponent } from './bookflight/bookflight.component'
import {RouterModule} from '@angular/router'
import { BookflightService } from './bookflight.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UserbookingComponent } from './userbooking/userbooking.component';
import { AddflightComponent } from './addflight/addflight.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ViewflightComponent } from './viewflight/viewflight.component';
import { BookconformComponent } from './bookconform/bookconform.component';
import { TraveldetailComponent } from './traveldetail/traveldetail.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UpdateflightComponent } from './updateflight/updateflight.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ViewdetailsComponent,
    HomeComponent,
    BookflightComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    UserdashboardComponent,
    UserbookingComponent,
    AddflightComponent,
    AdmindashboardComponent,
    ViewflightComponent,
    BookconformComponent,
    TraveldetailComponent,
    UserprofileComponent,
    UpdateflightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [SearchService, BookflightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
