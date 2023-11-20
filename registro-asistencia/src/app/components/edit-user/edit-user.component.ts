import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  editEmpleado: FormGroup;
  submitted = false;
  loading = false;
  id: string | null;

  constructor(private fb: FormBuilder,
    private _userService: UserService,
    private router: Router,
    private aRoute: ActivatedRoute) {
    this.editEmpleado = this.fb.group({
      cardUID: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  ngOnInit(): void {
    this.esEditar();
  }

  editarEmpleado() {
    this.submitted = true;

    if (this.editEmpleado.invalid) {
      return;
    }
    const empleado: any = {
      cardUID: this.editEmpleado.value.cardUID,
      nombre: this.editEmpleado.value.nombre,
      apellido: this.editEmpleado.value.apellido,
      userStatus: 1
    }

    this.loading = true;

    this._userService.editarEmpleado(empleado).then(() => {
      console.log('Empleado registrado con exito!');
      this.loading = false;
      this.router.navigate(['/list-users'])
    }).catch(error => {
      console.log(error);
      this.loading = false;
    })
  }

  esEditar() {
    if (this.id !== null) {
      this._userService.getEmpleado(this.id).subscribe(data => {
        console.log(data['nombre']); // Accede directamente a los campos
        // Actualiza los valores del formulario con los datos obtenidos
        this.editEmpleado.patchValue({
          cardUID: data['cardUID'],
          nombre: data['nombre'],
          apellido: data['apellido'],
        });
      }, error => {
        console.error(error);
      });
    }
  }

}
