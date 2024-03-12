import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iusuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private baseURL = 'https://my-json-server.typicode.com/TommoParra/users_json/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Iusuario[]> {
    return this.http.get<Iusuario[]>(this.baseURL);
  }

  searchUsers(filterData: Iusuario): Observable<Iusuario[]> {
    const searchURL = 'URL_TO_YOUR_SEARCH_ENDPOINT'; 

   
    return this.http.post<any[]>(searchURL, filterData);
  }
}
