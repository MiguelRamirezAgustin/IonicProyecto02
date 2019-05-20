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
       title: 'Camara',
       url: '/menu/camara',
       icon: 'reverse-camera'
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
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
