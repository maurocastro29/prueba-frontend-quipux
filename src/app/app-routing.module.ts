import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresasComponent } from './conponents/empresas/empresas.component';
import { ArticulosComponent } from './conponents/articulos/articulos.component';
import { ColaboradoresComponent } from './conponents/colaboradores/colaboradores.component';
import { HomeComponent } from './conponents/home/home.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'empresas', component: EmpresasComponent },
  { path: 'articulos', component: ArticulosComponent },
  { path: 'colaboradores', component: ColaboradoresComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Para rutas no encontradas. Redirige a home por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
