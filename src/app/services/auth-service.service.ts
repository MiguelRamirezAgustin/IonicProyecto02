import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {

  constructor(private http: HttpClient,
             public LoaderController:LoadingController) { }
 

//Loader
async PresenLoader(){
  const Load= await this.LoaderController.create({
    message:'Cargando..',
    duration:2000,
    translucent:true
  });
  await Load.present();
}


httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


//Metodo get 
servicioUsuariosGet(){
    return new Promise( resolve => {
      this.http.get('https://0kocuz1qef.execute-api.us-east-2.amazonaws.com/test').subscribe(data => {
        console.log('^^^^^^^^OK_GET^^^^^^^^^^>\n');
        resolve(data);
        console.log(data);
        console.log('^^^^^^^^^^^^^^^^^^^\n');
      }, (error) => {
        console.log('–––––––––––ERROR––GET–––––––––\n');
        console.log(error);
        console.log('–––––––––––––––––––––––––\n');
      });
    });
}




// //Metodo post
servicioUsuariosPost(datosUsuarios){
  return new Promise( resolve => {
   this.http.post('https://0kocuz1qef.execute-api.us-east-2.amazonaws.com/test', datosUsuarios ).subscribe(data => {
     resolve(data);
      console.log('^^^^^^^^OK_POST^^^^^^^^^^>\n');
      console.log(data);
      console.log('^^^^^^^^^^^^^^^^^^^\n');
     }, error=>{
      console.log('–––––––––––ERROR––POST–––––––––\n');
      console.log(error);
      console.log('–––––––––––––––––––––––––\n');
    });
  });
}


//Metodo Delete user
 servicioUsuariosDelete(id){
  return new Promise(resolve => {
    this.http.post('https://0kocuz1qef.execute-api.us-east-2.amazonaws.com/test/delete' , id , this.httpOptions ).subscribe(res=>{
    resolve(res);
    console.log('^^^^^^^^OK_Delete^^^^^^^^^^>\n', res);
   }, error=>{
    console.log('–––––––––––ERROR––DELETE–––––––––\n', JSON.stringify( error));
        }
      );
  });
 }
  



// deleteUser(id) {
//   console.log('se ejecuta delete del service' + JSON.stringify(id));
//   return new Promise((resolve, reject) => {
//     this.http
//       .delete(
//         "https://w6rklqs7qe.execute-api.us-east-1.amazonaws.com/dev/employee/" + id
//       )
//       .subscribe(
//         res => {
//           resolve(res);
//           console.log('res' + JSON.stringify(res));
//         },
//         error => {
//           reject(error);
//         }
//       );
//   });


 //Get S3 Ejemplo 
  servicio_s3_Get(){
    return new Promise(resolve=>{
      this.http.get('https://0nkpk9odw3.execute-api.us-east-2.amazonaws.com/test').subscribe(data=>{
        resolve(data);
        console.log('^^^^^^^^OK_s3_Get^^^^^^^^^^>\n');
        console.log(data);
      },error=>{
        console.log('–––––––––––ERROR––3_Get–––––––––\n');
        console.log(JSON.stringify( error));
      });
    });
  }


  
}
