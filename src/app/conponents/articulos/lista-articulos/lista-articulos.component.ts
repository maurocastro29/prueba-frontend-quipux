import { Component, OnInit } from '@angular/core';
import { ArticulosService } from 'src/app/services/articulos.service';
@Component({
  selector: 'app-lista-articulos',
  templateUrl: './lista-articulos.component.html',
  styleUrls: ['./lista-articulos.component.css']
})
export class ListaArticulosComponent implements OnInit {

  articulos: any[] = [];

  constructor(private articulosService: ArticulosService) {}

  ngOnInit(): void {
    this.articulosService.getArticulos().subscribe(data => {
      this.articulos = data;
    });
  }

}
