import { Component, OnInit } from '@angular/core';
import { Database, onValue, ref } from '@angular/fire/database';


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})

export class ListUsersComponent implements OnInit{
  
  usuarios: Array<any>=[]

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

}
