import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  imports: [RouterModule, IonicModule],
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.scss'],
  standalone: true,
})
export class MensajeComponent {
  nombre: string | null = '';
  constructor(route: ActivatedRoute) {
    this.nombre = route.snapshot.paramMap.get('nombre');
  }
}
