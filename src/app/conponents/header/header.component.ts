import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  logoUrl: string = "";
  showFigure: boolean = true;
  alternateContent: string = "";

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.logoUrl = "assets/images/logo.png";
    this.router.events.subscribe(() => {
      this.updateDisplayBasedOnRoute();
    });
    this.updateDisplayBasedOnRoute();
  }

  updateDisplayBasedOnRoute(): void {
    const currentRoute = this.router.url;
    switch (currentRoute) {
      case '/home':
        this.showFigure = true;
        this.alternateContent = "";
        break;
      case '/empresas':
        this.showFigure = false;
        this.alternateContent = `<div class="ml-5 text-muted">
          <i class="fa fa-building mr-3" aria-hidden="true"></i>
          <span class="mr-2">/</span>
          <span class="mr-1">EMPRESAS </span>
          <span class="mr-2">/</span>
          <span class="text-primary border-bottom border-primary pb-2">NOMBRE EMPRESA</span>
        </div>`;
        break;
      case '/articulos':
        this.showFigure = false;
        this.alternateContent =`<div class="ml-5 text-muted">
          <i class="fa fa-building mr-3" aria-hidden="true"></i>
          <span class="mr-2">/</span>
          <span class="mr-1">EMPRESAS </span>
          <span class="mr-2">/</span>
          <span class="text-primary border-bottom border-primary pb-2">ARTÍCULO</span>
        </div>`;
        break;
      case '/colaboradores':
          this.showFigure = false;
          this.alternateContent = `<div class="ml-5 text-muted">
          <i class="fa fa-building mr-3" aria-hidden="true"></i>
          <span class="mr-2">/</span>
          <span class="mr-1">EMPRESAS </span>
          <span class="mr-2">/</span>
          <span class="text-primary border-bottom border-primary pb-2">COLABORADORES</span>
        </div>`;
          break;
      default:
        this.showFigure = false;
        this.alternateContent = "<p>Contenido por defecto.</p>";
        break;
    }
  }
}
