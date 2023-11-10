import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './login/forgotpassword/forgotpassword.component';
import { LoginpageComponent } from './login/loginpage/loginpage.component';
import { PagenotfoundComponent } from './login/pagenotfound/pagenotfound.component';
import { SignupComponent } from './login/signup/signup.component';
import { NavBarComponent } from "./MainPage/nav-bar/nav-bar.component";
import { HomeComponent } from "./MainPage/home/home.component";
import { BuynowpageComponent } from "./MainPage/Buying/buynowpage.component";
import { ShowDetailPageComponent } from "./MainPage/show_det/show-detail-page.component";
import { CartpageComponent } from "./MainPage/Cart/cartpage.component";
import { DisplayComponent } from "./MainPage/display/display.component";
import { ContactComponent } from "./MainPage/contact/contact.component";
import { AboutComponent } from "./MainPage/about/about.component";
import { AuthGuardService } from "./Services/auth_guard.service";
import { MyOrdersComponent } from "./MainPage/my_orders/my-orders.component";
import { TrackItemComponent } from "./MainPage/track-item/track-item.component";

const appRoute : Routes = [

    {path:'',component: LoginpageComponent, },
    {path:'login',component: LoginpageComponent},
    {path:'signup', component: SignupComponent},
    {path:'forgot-password', component: ForgotpasswordComponent},
    {path:'pagenotfound',component: PagenotfoundComponent},
    {path: 'navbar',component:NavBarComponent,canActivate:[AuthGuardService]},
    {path: 'home',component: HomeComponent},
    {path: 'display',component: DisplayComponent,canActivate:[AuthGuardService]},
    {path: 'contact',component:ContactComponent,canActivate:[AuthGuardService]},
    {path:'about',component:AboutComponent,canActivate:[AuthGuardService]},
    {path:'buynow', component:BuynowpageComponent,canActivate:[AuthGuardService]},
    {path:'buynow/:id', component:BuynowpageComponent,canActivate:[AuthGuardService]}, 
    {path:'showdet',component:ShowDetailPageComponent,canActivate:[AuthGuardService]},
    {path:'showdet/:id',component:ShowDetailPageComponent,canActivate:[AuthGuardService]},
    {path:'cart',component:CartpageComponent,canActivate:[AuthGuardService]},
    {path:'orders',component:MyOrdersComponent,canActivate:[AuthGuardService]},
    {path:'track/:id',component:TrackItemComponent,canActivate:[AuthGuardService]},
    {path:'**',component: PagenotfoundComponent,canActivate:[AuthGuardService]}
    ]
@NgModule({
    imports:[
        RouterModule.forRoot(appRoute, {enableTracing:true}) 
    ],
    exports:[RouterModule]
})
export class AppRoutingmodule{

}