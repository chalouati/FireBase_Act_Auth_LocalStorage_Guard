import { Component, Input  } from '@angular/core';
import { ToastrModule,ToastrService } from 'ngx-toastr';
import {LoginService} from './shared/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  auth:boolean;

  constructor (private serAuth:LoginService) {
    this.auth=this.serAuth.auth;
   }
}
