import { Injectable, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import {Observable,of, from } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrModule,ToastrService } from 'ngx-toastr';

@Injectable({

  providedIn: 'root'
})
export class LoginService {

  auth:boolean;
  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth, private router:Router,private toastr:ToastrService) { 

   this.user=firebaseAuth.authState;

  }


  verifierlogin(password:string,mail:string) {
    console.log(mail);

              return  this.firebaseAuth.signInWithEmailAndPassword(mail,password)
                .then(value => {
                  this.auth =true;
                  this.router.navigate(['../all-students']);
                  
                  this.toastr.success('Succée!','Authentification avec:');
                  
                })
                .catch(err => {
                  this.toastr.error('Echec!','ça marche pas:');
                })

 
                         }


 Inscription(email: string, password: string) {
              this.firebaseAuth.createUserWithEmailAndPassword(email, password).then(value => {
                this.toastr.success('Succée!','Inscription avec:');
                this.router.navigate(['../Authentication']);
                       })
                          .catch(err => {
                            this.toastr.error('Echec!','ça marche pas:');
                            });    
                        }


renitialisation(email:string){
  return this.firebaseAuth.sendPasswordResetEmail(email);
}


   logout() {
      this.firebaseAuth.signOut();
      this.router.navigate(['../Authentication']);
         }

}
