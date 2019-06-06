import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage implements OnInit {

  datos:any;
  datosG:any;
   
  result2:any;
  result1: any;

  constructor(public AppSercice:AuthServiceService) { }

  ngOnInit() {
    this.cargar_s3();
    console.log('Galeria---->>');
  }

  cargar_s3(){
    this.AppSercice.servicio_s3_Get()
    //.then((res:any) => {  :any para saber la posision de array /Contents posiion de array EJEMPLO__01  
      .then((res:any) => {
       this.result2 = res.Contents
       console.log('respuesta__s3__!', JSON.stringify( res.Contents));
    }, error => {
      console.log('Error', error);
    });
  }



  // consultarGet() {
  //   this.restServicio.getResultados()
  //   .subscribe(res => {
  //     this.result2 = Object.keys(res).map(i => res[i])
  //     for(var c = 0; c < this.result2.length; c++){
  //       this.result1 = this.result2[c];
  //     }
  //     console.log('respuesta__!!! ', JSON.stringify( this.result1));
  //   });
  // }
  
}
   



//RESPUESTA DE SERVICIO     EJEMPLO__01
// {
//   "IsTruncated": false,
//   "Marker": "",
//   "Contents": [
//       {
//           "Key": "busqueda.png",
//           "LastModified": "2019-05-31T22:27:20.000Z",
//           "ETag": "\"d6944c37b84fc595b4ee5cff4b4e4fb4\"",
//           "Size": 1850,
//           "StorageClass": "STANDARD",
//           "Owner": {
//               "ID": "05e4811dee0fa3ba0a72cd40a15d7fe55225c0e7735eb4c8d6b40f4cb66ef7be"
//           }
//       },
//       {
//           "Key": "gorjeo.png",
//           "LastModified": "2019-05-31T22:26:37.000Z",
//           "ETag": "\"08ed456da7c064a42ed528098c78dfc0\"",
//           "Size": 1301,
//           "StorageClass": "STANDARD",
//           "Owner": {
//               "ID": "05e4811dee0fa3ba0a72cd40a15d7fe55225c0e7735eb4c8d6b40f4cb66ef7be"
//           }
//       }
//   ],
//   "Name": "usuarios-galeria",
//   "Prefix": "",
//   "MaxKeys": 50,
//   "CommonPrefixes": []
// }