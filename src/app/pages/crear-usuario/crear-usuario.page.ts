import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.page.html',
  styleUrls: ['./crear-usuario.page.scss'],
})
export class CrearUsuarioPage implements OnInit {

  constructor(public ApiService: AuthServiceService, private http: HttpClient, ) { }

  ArrayUsuario = {
    "nombre": ' ',
    "apellidos": ' ',
    "direccion": ' '
  }

  ngOnInit() {
  }

  //Registrar Usuarios
  registrar() {
    console.log('Agregar--dos ----\n ', this.ArrayUsuario);
    if (this.ArrayUsuario.nombre === ' ' || this.ArrayUsuario.direccion === ' ' || this.ArrayUsuario.direccion === ' ') {
      alert('No se puede Agregar\n USUARIO ');
    } else {
      this.ApiService.PresenLoader();
      this.ApiService.servicioUsuariosPost(this.ArrayUsuario);
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
