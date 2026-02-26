import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nabvar',
  imports: [RouterLink,RouterModule, CommonModule],
  templateUrl: './nabvar.component.html',
  styleUrl: './nabvar.component.css'
})
export class NabvarComponent {
  mostrarModalSesion: boolean = false;

  abrirModalSesion(){
    this.mostrarModalSesion = true;
  }

  cerrarModalSesion(){
    this.mostrarModalSesion = false;
  }

  redireccionRegistro(){
    this.mostrarModalSesion = false;
    this.mostrarModalRegistro = true;
  }


  mostrarModalRegistro = false;

  abrirModalRegistro() {
    this.mostrarModalRegistro = true;
  }

  cerrarModalRegistro() {
    this.mostrarModalRegistro = false;
  }

  abrirModalLogin() {
    this.mostrarModalRegistro = false;
    this.mostrarModalSesion = true; 
  }
  
}