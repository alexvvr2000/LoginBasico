import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

export interface Usuario {
  nombre: string;
  clave: string;
  correo: string;
}

@Component({
  selector: 'app-login-form',
  imports: [IonicModule, RouterModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  registro: Usuario = {
    nombre: '',
    correo: '',
    clave: '',
  };
  usuarioNuevoForm: FormGroup = new FormGroup({
    nombre: new FormControl(this.registro.nombre, Validators.minLength(3)),
    correo: new FormControl(this.registro.correo, Validators.minLength(3)),
    clave: new FormControl(this.registro.clave, Validators.required),
  });

  botonActivo: boolean = false;

  constructor(private router: Router) {}

  onSubmit(): void {
    const nombreUsaurio = this.usuarioNuevoForm.get('nombre')?.value;
    this.router.navigate(['mensaje', nombreUsaurio]);
  }
}
