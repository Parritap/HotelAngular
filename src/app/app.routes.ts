import { Routes } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {AppComponent} from "./app.component";
import { HomepageComponent } from './home/homepage/homepage.component';
import { RegisterComponent } from './auth/register/register.component';

export const routes: Routes = [
  {path: "", component : LoginComponent },
  {path: "login", component : LoginComponent},
  {path: "home", component : HomepageComponent},
  {path: "register", component : RegisterComponent}
];
