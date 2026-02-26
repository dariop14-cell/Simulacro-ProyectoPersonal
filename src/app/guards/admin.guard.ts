import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../servicios/auth.service";

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {

  constructor(
    // Servicio de autenticación para verificar token, usuario y rol.
    private authService: AuthService,

    // Router para redirigir si el usuario no tiene permisos.
    private router: Router
  ) {}

  // Método que Angular ejecuta antes de permitir el acceso a una ruta protegida.
  canActivate(): boolean {

 // Si NO está logueado → lo manda a login
  if (!this.authService.isLoggedIn()) {
    this.router.navigate(['/login']);
    return false;
  }

  // Si está logueado pero NO es admin → acceso denegado
  if (!this.authService.esAdmin()) {
    alert('Acceso denegado');
    this.router.navigate(['/inicio']);
    return false;
  }

  // Si es admin → permite acceso
  return true;
}
}
