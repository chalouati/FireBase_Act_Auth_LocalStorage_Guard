import { Component, OnInit,Input } from '@angular/core';
import {Student} from '../shared/models/student';
import {LoginService} from '../shared/services/login.service';
import { ToastrModule,ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import {LocalStorageService} from 'ngx-localstorage';
import { auth } from 'firebase';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

   user = new Student(); 

   constructor (private serAuth:LoginService,private router:Router,private toastr:ToastrService,private localStor:LocalStorageService) { }
 

  ngOnInit():void{}

  authentifier(){

    this.serAuth.verifierlogin(this.user.password,this.user.email).then(value => {
      
        this.serAuth.auth=true;
        this.localStor.set('login',value.user.email);
      
        console.log(value);
        this.toastr.success('Succée!','Authentification avec:');
        this.router.navigate(['./all-students']);  
      })
      .catch(err => {
        this.toastr.error('Echec!','ça marche pas:');
      });
      
                 }

}
