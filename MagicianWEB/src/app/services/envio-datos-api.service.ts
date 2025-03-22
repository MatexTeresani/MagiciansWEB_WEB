import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// ✅ La interfaz debe estar FUERA de la clase
export interface DatosEnvio {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  empresa: string;
  detalles: string;
  mensaje?: string;
}

@Injectable({
  providedIn: 'root'
})
export class EnvioDatosApiService {
  private baseUrl = 'https://magiciansweb-web.onrender.com/api/envioDeDatos'; // Cambia esto por la URL de tu backend

  constructor(private http: HttpClient) {}

  // ✅ Método corregido para enviar los datos correctamente
  postData(Data: DatosEnvio): Observable<any> {
    console.log(Data);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.baseUrl, Data, { headers }); // ✅ Ahora envía Data correctamente
  }
}
