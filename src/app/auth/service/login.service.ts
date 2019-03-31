import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/usuario-model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  logar(usuario: Usuario) {
    return this.http.post<Usuario>(`http://localhost:2000/auth/logar`, usuario);
  }
}
