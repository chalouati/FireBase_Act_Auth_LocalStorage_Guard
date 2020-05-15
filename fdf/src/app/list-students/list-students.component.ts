import { Component, OnInit } from '@angular/core';
import {StudentService} from '../shared/services/student.service';
import { Student } from '../shared/models/student';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})

export class ListStudentsComponent implements OnInit {

  students:Student[];

  constructor(private servstudents: StudentService) { }
  
ngOnInit():void { this.getAllStudents(); }



getAllStudents () {

                    this.servstudents.listStudents().subscribe
                     (data => {
                                this.students = data.map ( e => {return {id:e.payload.doc.id , ...e.payload.doc.data() as Student };})
                              }
                                                              );
                  }




delete (id:string ) {

  Swal.fire({
    title: 'Vous êtes sur ?',
    text: "Attention: Cette action est irréversible!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: 'red',
    cancelButtonColor: '#3085d6',
    cancelButtonText: 'Fermer',
    confirmButtonText: 'Oui, supprimer!'
  }).then((result) => {
    if (result.value) {
      this.servstudents.deleteStudent(id);
      Swal.fire(
        'Supprimer !',
        'Le fichier a été supprimé .',
        'Succée'
      )
    }
  })
      
        }

}
