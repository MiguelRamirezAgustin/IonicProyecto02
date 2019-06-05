import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {


  datos: any;

  constructor(public ApiService: AuthServiceService,
              public alertController: AlertController
             ) { }


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


  async Detalles(i){
    console.log('Detalles'+ JSON.stringify(i));
   // alert(JSON.stringify(i));
   var datoNombre= i.nombre;
   var id= {"id":i.id}
   console.log('idUsuarios '+JSON.stringify(id));

   return new Promise(async (resolve) => {
    const confirm = await this.alertController.create({
    header: 'Borrar el usuario',
    //subHeader: 'Subtitle',
    message:datoNombre,
    buttons: [
      {
        text: 'Cancel',
        handler: () => {
          console.log('cancel')
          return resolve(false);
        },
      },
      {
        text: 'OK',
        handler: () => {
          console.log('ok ', id)
          this.eliminar(id);
          return resolve(true);
        },
      },
    ],
   });
   await confirm.present();
  });
 }

 eliminar(id){
  this.ApiService.servicioUsuariosDelete(id)
}
 

 




}
