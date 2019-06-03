import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  constructor(public ApiService:AuthServiceService) { }
  datos:any;
  ngOnInit() {
    console.log('pantalla de usuarios--->>>>>');
    this.CargarUsuarios();
  }

  CargarUsuarios(){
  this.ApiService.servicioUsuarios().then(data =>{
    this.datos = data;
    console.log('Estos son los datos de Usuarios ', JSON.stringify( this.datos));
  },error =>{
    console.log(error);
  });
 }

}
