import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../auth/model/usuario-model';
import { LoginService } from '../auth/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [LoginService]
})
export class HeaderComponent implements OnInit {

  isLogged: boolean = false;
  erroLogar: boolean = false;
  usuario: Usuario = new Usuario;
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required),
  });

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {

    this.ValidaLogin();

  }

  ValidaLogin() {
    const user: Usuario = JSON.parse(sessionStorage.getItem('usuario'));
    if (user != null) {
      this.usuario = user;
      this.isLogged = true;
    }
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.usuario.email = this.loginForm.value.email;
      this.usuario.senha = this.loginForm.value.senha;
      this.loginService.logar(this.usuario).subscribe(res => {
        this.usuario = res;
        sessionStorage.setItem('usuario', JSON.stringify(this.usuario));
        console.table(this.usuario);
        this.erroLogar = false;
        location.reload();
      }, error => {
        this.erroLogar = true;
        console.log("Errouuuuuuuu");
      });
    }
  }
}

