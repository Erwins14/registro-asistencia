import { Component, ElementRef, OnInit } from '@angular/core';
import { Database, onValue, ref } from '@angular/fire/database';


@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  asistencias: Array<any> = []
  filtro: string = '';
  isLoading: boolean = false;

  constructor(public database: Database,
              private el: ElementRef) { }

  ngOnInit(): void {
    this.obtenerAsistencia();
  }

  obtenerAsistencia() {
    // Lógica para obtener los datos de asistencias desde Firebase
    const starCountRef = ref(this.database, 'asistencia/');
    onValue(starCountRef, (snapshot) => {
      this.asistencias = []; // Reiniciar el array antes de cargar los datos
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        let asistencia = { uid: childData.uid, nombre: childData.nombre, apellido: childData.apellido, date: childData.date, time: childData.time, status: childData.status };
        this.asistencias.push(asistencia);
      });
      // Después de cargar los datos, se llama al método de filtrado
      this.filtrarAsistencias();
    });
  }

  // Método para filtrar las asistencias según el valor del filtro
  filtrarAsistencias() {
    return this.asistencias.filter(asistencia => {
      return (
        asistencia.uid.toLowerCase().includes(this.filtro.toLowerCase()) ||
        asistencia.nombre.toLowerCase().includes(this.filtro.toLowerCase()) ||
        asistencia.apellido.toLowerCase().includes(this.filtro.toLowerCase()) ||
        asistencia.date.toLowerCase().includes(this.filtro.toLowerCase()) ||
        asistencia.time.toLowerCase().includes(this.filtro.toLowerCase())
      );
    });
  }

  // Método que se activará al hacer scroll
  onScroll({ target }: any): void {
    const scrollPosition = target.scrollTop + target.clientHeight;
    const tableHeight = target.scrollHeight;

    if (scrollPosition >= tableHeight && !this.isLoading) {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 1000); // 
    }
  }

}
