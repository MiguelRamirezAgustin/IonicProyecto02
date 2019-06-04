import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  constructor(public ApiService: AuthServiceService,
  ) { }




  datos: any;
  ngOnInit() {
    console.log('pantalla de usuarios--->>>>>');
    //Loader viene de services...!!
    this.ApiService.PresenLoader();
    this.CargarUsuarios();
  }


  //Metodo get 
  CargarUsuarios() {
    this.ApiService.servicioUsuariosGet().then(data => {
      this.datos = data;
      console.log('Estos son los datos de Usuarios ', JSON.stringify(this.datos));
    }, error => {
      console.log(error);
    });
  }

}
