import { UsuarioLogin} from '../model/UsuarioLogin';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };


  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>('https://blogpessoalnathsilvestre.herokuapp.com/usuarios/logar', usuarioLogin)

  }

  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://blogpessoalnathsilvestre.herokuapp.com/usuarios/cadastrar', usuario)

  }

  getUsuarioById(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`https://blogpessoalnathsilvestre.herokuapp.com/usuarios/${id}` )

  }

  logado(){
    let ok: boolean = false

    if(environment.token != ''){
      ok = true
    }
    return ok
  }
}
