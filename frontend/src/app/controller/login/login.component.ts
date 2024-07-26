import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/Cliente';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: string = "";
  password: string = "";
  cliente: Cliente = new Cliente;
  constructor(private loginService: LoginService) { 

  } 

login(){
  this.loginService.login(this.usuario, this.password).subscribe(data => {
    this.cliente = data;
    if(this.cliente!=null){
      alert("usuario "+this.cliente.email+" autenticado");
    }else{
      alert("usuario no autenticado");
    }
    console.log(this.cliente);
  });
}


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  }

  


