import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})

export class TemaService {
  getTemaById(id: number) {
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
      
    getAllTema(): Observable<Tema[]>{
      return this.http.get<Tema[]>('https://blogpessoalnathsilvestre.herokuapp.com/tema',  this.token)
    }

    getByIdTema(id: number): Observable<Tema>{
      return this.http.get<Tema>(`https://blogpessoalnathsilvestre.herokuapp.com/tema/${id}`, this.token)
    }

    putTema(temaCadastro: Tema): Observable<Tema>{
      return this.http.put<Tema>('https://blogpessoalnathsilvestre.herokuapp.com/tema', temaCadastro, this.token)
    }

    deleteTema(id: number){
      return this.http.delete(`https://blogpessoalnathsilvestre.herokuapp.com/tema/${id}`, this.token)
    }
  
}
