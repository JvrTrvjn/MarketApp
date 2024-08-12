import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/Cliente';
import { RegistrarService } from 'src/app/service/registrar.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {

  cliente: Cliente = new Cliente;
  constructor(private registrarService: RegistrarService) {

  }
  registrar() {
    if (!this.cliente.usuario || !this.cliente.password || !this.cliente.email) {
      alert("Por favor, completa todos los campos requeridos.");
      return;
    }
    this.registrarService.registrar(this.cliente).subscribe({
      next: (data) => alert("usuario " + this.cliente.email + " registrado."),
      error: (err) => {
        console.error('Error:', err); // Verifica el error en la consola
        alert("este usuario ya existe, error del front jeje");
      }
    });
  }
  

}
