import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-nabvar',
  imports: [RouterLink,RouterModule, CommonModule],
  templateUrl: './nabvar.component.html',
  styleUrl: './nabvar.component.css'
})
export class NabvarComponent implements OnInit {
    usuario: any = null;

  constructor(public authService: AuthService) {}

  ngOnInit() {
    // Cargar usuario al iniciar
    this.usuario = this.authService.getUsuario();

    // Escuchar cuando alguien hace login
    this.authService.loginEvent.subscribe(() => {
      this.usuario = this.authService.getUsuario();
    });
  }

  cerrarSesion() {
    this.authService.logout();
    this.usuario = null;
  }
}