import { Component, HostListener  } from '@angular/core';

@Component({
  selector: 'app-menu-left',
  templateUrl: './menu-left.component.html',
  styleUrls: ['./menu-left.component.css']
})
export class MenuLeftComponent {
  isCollapsed = true; // Estado del menú principal
  isSubmenuEmpresasVisible = false; // Estado del submenú de empresas
  isSubmenuArticulosVisible = false; // Estado del submenú de artículos
  isSubmenuColaboradoresVisible = false; // Estado del submenú de colaboradores
  activeRoute: string = '';

  //Metodo par acambiar el color al menu cuando se elige
  setActiveRoute(route: string) {
    this.activeRoute = route;
  }
  //Metodo para el menu hamburguesa
  toggleMenu() {
    this.isCollapsed = !this.isCollapsed; // Cambia el estado del menú
    if(this.isCollapsed){
      this.ocultarTodos();
    }
  }
  // Método para alternar los submenús
  toggleSubmenu(menu: string) {
    if (menu === 'empresas') {
      this.isSubmenuEmpresasVisible = !this.isSubmenuEmpresasVisible;
      this.isSubmenuArticulosVisible = false;
      this.isSubmenuColaboradoresVisible = false;
    } else if (menu === 'articulos') {
      this.isSubmenuArticulosVisible = !this.isSubmenuArticulosVisible;
      this.isSubmenuEmpresasVisible = false;
      this.isSubmenuColaboradoresVisible = false;
    } else if (menu === 'colaboradores') {
      this.isSubmenuColaboradoresVisible = !this.isSubmenuColaboradoresVisible;
      this.isSubmenuEmpresasVisible = false;
      this.isSubmenuArticulosVisible = false;
    }
  }
  //Metodo para ocultar todos los submenus cuando el menu principal se oculta
  ocultarTodos(){
    this.isSubmenuEmpresasVisible = false;
    this.isSubmenuArticulosVisible = false;
    this.isSubmenuColaboradoresVisible = false;
  }
  // Detectar clics en el documento
  @HostListener('document:click', ['$event'])
  handleClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const menuElement = document.querySelector('.menu-left'); // Cambia esto al selector de tu menú
    // Comprobar si el clic fue fuera del menú
    if (menuElement && !menuElement.contains(target)) {
      this.isCollapsed = true; // Oculta el menú si el clic fue fuera
      this.ocultarTodos();
    }
  }
}
