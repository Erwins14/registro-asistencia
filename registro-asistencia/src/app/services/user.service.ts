import { Injectable } from '@angular/core';
import { Database, onValue, push, ref, set } from '@angular/fire/database';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private database: Database) { }

  editarEmpleado(empleado: any) {
    const { cardUID, ...userData } = empleado;

    userData.cardUID = cardUID; // Agrega el cardUID a los datos del usuario

    const empleadosRef = ref(this.database, 'usuarios/' + cardUID); // Obtiene la referencia al nodo 'usuarios/cardUID
    return set(empleadosRef, userData); // Guarda los datos del usuario en la ruta 'usuarios/cardUID'
  }

  getEmpleado(id: string): Observable<any> {
    const empleadosRef = ref(this.database, 'usuarios/' + id); // Referencia al nodo 'empleados' con un ID específico
    return new Observable(observer => {
      onValue(empleadosRef, snapshot => {
        const empleado = snapshot.val();
        observer.next(empleado); // Emite el empleado encontrado
      }, error => {
        observer.error(error); // Maneja el error si ocurre alguno durante la obtención del empleado
      });
    });
  }

}
