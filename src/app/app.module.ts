import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingmodule } from './app-routing.module';
import { LoginpageComponent } from './login/loginpage/loginpage.component';
import { ForgotpasswordComponent } from './login/forgotpassword/forgotpassword.component';
import { PagenotfoundComponent } from './login/pagenotfound/pagenotfound.component';
import { SignupComponent } from './login/signup/signup.component';
import { NavBarComponent } from './MainPage/nav-bar/nav-bar.component';
import { HomeComponent } from './MainPage/home/home.component';
import { DisplayComponent } from './MainPage/display/display.component';
import { AboutComponent } from './MainPage/about/about.component';
import { ContactComponent } from './MainPage/contact/contact.component';
import { PoductsComponent } from './MainPage/poducttts/poducts.component';
import { BuynowpageComponent } from './MainPage/Buying/buynowpage.component';
import { ShowDetailPageComponent } from './MainPage/show_det/show-detail-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//db work starts here imports
import{HttpClientModule} from '@angular/common/http';
import { CartpageComponent } from './MainPage/Cart/cartpage.component';
import { AuthGuardService } from './Services/auth_guard.service';
import { AuthService } from './Services/Auth.service';
import { MyOrdersComponent } from './MainPage/my_orders/my-orders.component';
import { TrackItemComponent } from './MainPage/track-item/track-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    SignupComponent,
    ForgotpasswordComponent,
    PagenotfoundComponent,
    NavBarComponent,
    HomeComponent,
    DisplayComponent,
    AboutComponent,
    ContactComponent,
    PoductsComponent,
    BuynowpageComponent,
    ShowDetailPageComponent,
    CartpageComponent,
    MyOrdersComponent,
    TrackItemComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingmodule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    //this is to connect frnt end to back end
    HttpClientModule

  ],
  providers: [AuthGuardService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
