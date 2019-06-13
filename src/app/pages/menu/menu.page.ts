import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'Usuario',
      url: '/menu/usuarios',
      icon: 'person'
    },
    {
      title: 'Usuario Crear',
      url: '/menu/usuariosCrear',
      icon: 'person-add'
    },
     {
       title: 'Camara',
       url: '/menu/camara',
       icon: 'reverse-camera'
     },
     {
       title:'Galeria',
       url:'/menu/galeria',
       icon: 'images'
     },
    {
      title: 'Mas Opciones',
      children: [
        {
          title: 'Graficas',
          url: '/menu/graficas',
          icon: 'analytics'
        },
        {
          title: 'Otros',
          url: '/menu/otros',
          icon: 'alert'
        },
        {
          title: 'juego',
          url: '/menu/juego',
          icon: 'logo-game-controller-b'
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
