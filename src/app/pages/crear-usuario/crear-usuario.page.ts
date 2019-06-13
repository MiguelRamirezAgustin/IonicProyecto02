import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { async } from '@angular/core/testing';


@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.page.html',
  styleUrls: ['./crear-usuario.page.scss'],
})
export class CrearUsuarioPage implements OnInit {

  constructor(public ApiService: AuthServiceService,
    private http: HttpClient,
    public router: Router,
    public alerta: AlertController) { }

  ArrayUsuario = {
    "nombre": ' ',
    "apellidos": ' ',
    "edad": ' ',
    "correo": ' ',
    "direccion": ' '

  }

  ngOnInit() {
  }


  //ALERTA
  async presentAlert() {
    return new Promise(async (resolve) => {
      const confirm = await this.alerta.create({
        header: ' ',
        //subHeader: 'Esta seguro de eliminar el usuaros ?',
        message: "Desea ver la lista de Usuarios ",
        buttons: [
          {
            text: 'No',
            handler: () => {
              console.log('No')
              return resolve(false);
            },
          },
          {
            text: 'OK',
            handler: () => {
            this.router.navigateByUrl('/menu/usuarios');  
              console.log('ok ')

            },
          },
        ],
      });
      await confirm.present();
    });
  }





  //Registrar Usuarios
  registrar() {
    console.log('Agregar--dos ----\n ', this.ArrayUsuario);
    if (this.ArrayUsuario.nombre === ' ' || this.ArrayUsuario.direccion === ' ' || this.ArrayUsuario.direccion === ' ') {
      alert('No se puede Agregar\n USUARIO ');
    } else {
      this.ApiService.PresenLoader();
      this.ApiService.servicioUsuariosPost(this.ArrayUsuario);
      this.router.navigateByUrl('/menu/usuarios'); 
    }
  }



  //   register(){     sin separar URL 
  //   console.log('Agregar--dos ----\n ',  this.ArrayUsuario);
  //   if(this.ArrayUsuario.nombre === ' ' || this.ArrayUsuario.direccion === ' ' ||  this.ArrayUsuario.direccion === ' ' ){
  //     alert('No se puede Agregar\n USUARIO ');
  //   }else{
  //    return new Promise( resolve => {
  //     this.http.post('https://mbsi69vq93.execute-api.us-east-2.amazonaws.com/test', this.ArrayUsuario).subscribe(data => {
  //       resolve(data);
  //         console.log('^^^^^^^^OK^^^^^^^^^^>\n');
  //         console.log(data);
  //         console.log('^^^^^^^^^^^^^^^^^^^\n');
  //       }, error=>{
  //         console.log('–––––––––––ERROR–––––––––––\n');
  //         console.log(error);
  //         console.log('–––––––––––––––––––––––––\n');
  //      });
  //    });
  //   }
  // }



}
