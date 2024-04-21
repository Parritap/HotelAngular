import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import { HomepageComponent } from "../../home/homepage/homepage.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
