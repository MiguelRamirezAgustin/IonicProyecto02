import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/menu/usuarios',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'usuarios',
        loadChildren: '../usuarios/usuarios.module#UsuariosPageModule'
      },
      {
        path: 'camara',
        loadChildren: '../camara/camara.module#CamaraPageModule'
      },
      {
        path: 'graficas',
        loadChildren: '../graficas/graficas.module#GraficasPageModule'
      },
      {
        path: 'otros',
        loadChildren: '../otros/otros.module#OtrosPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
