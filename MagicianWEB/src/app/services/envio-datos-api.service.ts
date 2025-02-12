import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EnvioDatosApiService {
  private baseUrl = 'http://localhost:5000'; // Cambia esto por la URL de tu backend

  constructor(private http: HttpClient) { }

  // Método para enviar datos
  postData(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/envioDeDatos`, data);
  }

}
