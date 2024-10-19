import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  private jsonUrl = 'assets/archivos/articulos.json'; // Ruta del archivo JSON
  constructor(private http: HttpClient) { }

  // Método para obtener los artículos
  getArticulos(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
}
