import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
 // { path: 'graficas', loadChildren: './pages/graficas/graficas.module#GraficasPageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  // { path: 'otros', loadChildren: './pages/otros/otros.module#OtrosPageModule' },
  // { path: 'camara', loadChildren: './pages/camara/camara.module#CamaraPageModule' },
  // { path: 'datos', loadChildren: './pages/datos/datos.module#DatosPageModule' },
  // { path: 'usuarios', loadChildren: './pages/usuarios/usuarios.module#UsuariosPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
