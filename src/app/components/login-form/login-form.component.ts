import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
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
  usuarioNuevo: FormGroup = new FormGroup({
    nombre: new FormControl(''),
    clave: new FormControl(''),
    correo: new FormControl(''),
  });
  botonActivo: boolean = false;

  constructor(private router: Router) {}

  onSubmit(): void {
    const nombreUsaurio = this.usuarioNuevo.get('nombre')?.value;
    this.router.navigate(['mensaje', nombreUsaurio]);
  }
}
