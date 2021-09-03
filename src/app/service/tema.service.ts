import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {
  getAllTema() {
    throw new Error('Method not implemented.');
  }

  constructor(   
     private http: HttpClient) { }

     token = {
       headers: new HttpHeaders().set('Authorization', environment.token)
     }

    postTema(temaCadastro: Tema): Observable<Tema>{
      return this.http.post<Tema>('https://blogpessoalnathsilvestre.herokuapp.com/tema', temaCadastro, this.token)
    
      }
      
    gettAllTema(): Observable<Tema[]>{
      return this.http.get<Tema[]>('https://blogpessoalnathsilvestre.herokuapp.com/tema',  this.token)
    }

    gettByIdTema(id: number): Observable<Tema>{
      return this.http.get<Tema>(`https://blogpessoalnathsilvestre.herokuapp.com/tema/${id}`, this.token)
    }

    putTema(tema: Tema): Observable<Tema>{
      return this.http.put<Tema>('https://blogpessoalnathsilvestre.herokuapp.com/tema', tema, this.token)
    }

    deleteTema(id: number){
      return this.http.delete(`https://blogpessoalnathsilvestre.herokuapp.com/tema/${id}`, this.token)
    }
  
}
