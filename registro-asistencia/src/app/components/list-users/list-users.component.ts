import { Component, OnInit } from '@angular/core';
import { Database, get, onValue, ref, set } from '@angular/fire/database';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})

export class ListUsersComponent implements OnInit {

  usuarios: Array<any> = []

  constructor(public database: Database,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerUsuario();
  }

  obtenerUsuario() {
    const starCountRef = ref(this.database, 'usuarios/');
    onValue(starCountRef, (snapshot) => {
      this.usuarios = []; // Reiniciar el array de usuarios para evitar duplicados al volver a cargarlos
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        let usuario = { cardUID: childData.cardUID, nombre: childData.nombre, apellido: childData.apellido, userStatus: childData.userStatus };
        this.usuarios.push(usuario);
      });
    });
    console.log(this.usuarios);
  }

  async inactivarEmpleado(id: string){
    const starCountRef = ref(this.database, 'usuarios/' + id);
    
    try{
      const snapshot = await get(starCountRef);
      if (snapshot.exists()) {
        const childData = snapshot.val();
        childData.userStatus = 0; // Cambia el userStatus a 0 y mantiene otros campos intactos
        set(starCountRef, childData);
        console.log('Empleado inactivado con éxito');
        this.toastr.error('El empleado fue inactivado con éxito!', 'Empleado Inactivado', {
          positionClass : 'toast-bottom-right'
        });
      } else {
        console.log('El empleado no existe');
      }
    } catch (error) {
      console.error('Error al actualizar el estado del usuario:', error);
    }
  }

}
