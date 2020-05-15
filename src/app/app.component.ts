import { Component, Input  } from '@angular/core';
import { ToastrModule,ToastrService } from 'ngx-toastr';
import {LoginService} from './shared/services/login.service';
import {LocalStorageService} from 'ngx-localstorage';
import { Router } from '@angular/router';
import { stringify } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  log:string;
  constructor (private router:Router,private serAuth:LoginService,private localStor:LocalStorageService,private toastr:ToastrService) {}


ngOnInit(){
             this.log= this.localStor.get('login');  
        }


logout2() {
 this.serAuth.logout();
         }
}
