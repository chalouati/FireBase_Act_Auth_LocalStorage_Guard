import { Component, OnInit } from '@angular/core';
import {Student} from '../shared/models/student';
import {LoginService} from '../shared/services/login.service';
import { ToastrModule,ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  public user = new Student(); 

   constructor (private serAuth:LoginService) { }
 

  ngOnInit():void{
  }

  authentifier(){

  console.log(this.user.password,this.user.email);
    this.serAuth.verifierlogin(this.user.password,this.user.email);

                 }

}
