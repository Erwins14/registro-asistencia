import { Component, OnInit } from '@angular/core';
import { Database, onValue, ref } from '@angular/fire/database';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  usuarios: Array<any> = []

  constructor(public database: Database) { }

  ngOnInit(): void {
    this.obtenerUsuario();
  }

  obtenerUsuario() {
    const starCountRef = ref(this.database, 'usuarios/');
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        let usuario = { cardUID: childData.cardUID, nombre: childData.nombre, apellido: childData.apellido, userStatus: childData.userStatus };
        this.usuarios.push(usuario);
      });
    });
    console.log(this.usuarios);
  }

}
