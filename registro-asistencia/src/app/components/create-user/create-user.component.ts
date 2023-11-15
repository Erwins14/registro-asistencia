import { Component, OnInit } from '@angular/core';
import { Database, onValue, ref } from '@angular/fire/database';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit{

  usuarios: Array<any>=[]

  createUser: FormGroup;
  submitted = false;

  // constructor(private fb: FormBuilder) {
  //   this.createUser = this.fb.group({
  //     cardUID: ['', Validators.required],
  //     nombre: ['', Validators.required],
  //     apellido: ['', Validators.required],
  //     userStatus: ['', Validators.required]
  //   })
  // }

  constructor(public database:Database) {}

  ngOnInit(): void {
    this.obtenerUsuario();
  }

  obtenerUsuario(){
    const starCountRef = ref(this.database, 'usuarios/');
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        let usuario = {cardUID:childData.cardUID,nombre:childData.nombre,apellido:childData.apellido,userStatus:childData.userStatus};
        this.usuarios.push(usuario);
      });
    });
  }

  agregarUsuario(){
    console.log(this.createUser);
  }

}
