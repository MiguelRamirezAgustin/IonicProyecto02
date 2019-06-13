import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { LoadingController, AlertController } from '@ionic/angular';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  ide:any;
  dato:any;
  datos: any;
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 

  constructor(public ApiService: AuthServiceService,
              private http: HttpClient,
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
    this.ide= {"id":i.id}
   console.log('idUsuarios '+JSON.stringify(this.ide));

   return new Promise(async (resolve) => {
    const confirm = await this.alertController.create({
    header: 'Borrar Usuarios\n',
    subHeader: 'Esta seguro de eliminar el usuaros ?',
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
          console.log('ok ', )
          //this.eliminar(id);
          this.ApiService.servicioUsuariosDelete( JSON.stringify(this.ide));
          this.ApiService.PresenLoader();
          this.CargarUsuarios();
          return resolve(true);
        },
      },
    ],
   });
   await confirm.present();
  });
 }

 
//Eliminar con codigo duro y con boton 
//  eliminar(){
//   this.ide={
//     "id":"cd90d670-88aa-11e9-9e85-bb145c5a56e3"
//   }

//   console.log('datosiDE -- ', this.ide);
//    this.dato=JSON.stringify(this.ide.id);
//    console.log('datos01 id.id -- ', this.dato);

//    this.ApiService.servicioUsuariosDelete( JSON.stringify(this.ide));
// }

//  registrar() {
//   console.log('Agregar--dos ----\n ', this.ArrayUsuario);
//   if (this.ArrayUsuario.nombre === ' ' || this.ArrayUsuario.direccion === ' ' || this.ArrayUsuario.direccion === ' ') {
//     alert('No se puede Agregar\n USUARIO ');
//   } else {
//     this.ApiService.PresenLoader();
//     this.ApiService.servicioUsuariosPost(this.ArrayUsuario);
//   }
// }






}
