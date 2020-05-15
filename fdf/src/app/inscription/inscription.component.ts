import { Component, OnInit } from '@angular/core';
import {Student} from '../shared/models/student';
import {LoginService} from '../shared/services/login.service';
import { ToastrModule,ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  public user = new Student(); 

  constructor(private inscrip:LoginService) { }

  ngOnInit() {
  }

  inscription(){
    this.inscrip.Inscription(this.user.email,this.user.password)

}

}
