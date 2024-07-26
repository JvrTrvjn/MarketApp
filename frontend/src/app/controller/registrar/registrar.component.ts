import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/Cliente';
import { RegistrarService } from 'src/app/service/registrar.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  cliente: Cliente = new Cliente;
  constructor(private registrarService: RegistrarService) {

  }
  registrar(){
    this.registrarService.registrar(this.cliente).subscribe({
    next: (data) => {
      alert("usuario "+this.cliente.email+" registrado");
    },
    error: (err) => {
      alert("este usuario ya existe");
    }
    });
  }

  ngOnInit(): void {
  }

}
