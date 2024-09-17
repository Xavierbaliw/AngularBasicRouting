import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./component/login/login.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {config} from "rxjs";
import {AppComponent} from "./app.component";
import {SignupComponent} from "./component/signup/signup.component";
import {LandingPageComponent} from "./component/landing-page/landing-page.component";
import {HomepageComponent} from "./component/homepage/homepage.component";


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'landing-page', component: LandingPageComponent},
  {path: 'homepage', component: HomepageComponent},



]

@NgModule ({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {enableTracing: true})

  ],
  declarations:[
    AppComponent,
    LoginComponent,
    SignupComponent,
    LandingPageComponent,
    HomepageComponent,
  ],

  providers:[

  ],

  bootstrap:[
    AppComponent
  ]
})

export class AppModule{}
