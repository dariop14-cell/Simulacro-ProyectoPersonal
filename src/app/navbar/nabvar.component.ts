import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nabvar',
  imports: [RouterLink,CommonModule],
  templateUrl: './nabvar.component.html',
  styleUrl: './nabvar.component.css'
})
export class NabvarComponent {
  mostrarModal: boolean = false;

  abrirModal(){
    this.mostrarModal = true;
  }

  cerrarModal(){
    this.mostrarModal = false;
  }
}