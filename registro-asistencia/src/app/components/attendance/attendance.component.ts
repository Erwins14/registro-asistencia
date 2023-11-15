import { Component, OnInit } from '@angular/core';
import { Database, onValue, ref } from '@angular/fire/database';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit{

  asistencias: Array<any>=[]

  constructor(public database:Database) {}

  ngOnInit(): void {
    this.obtenerAsistencia();
  }

  obtenerAsistencia(){
    const starCountRef = ref(this.database, 'asistencia/');
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        let asistencia = {uid:childData.uid,nombre:childData.nombre,apellido:childData.apellido,date:childData.date,time:childData.time,status:childData.status};
        this.asistencias.push(asistencia);
      });
    });
  }

}
