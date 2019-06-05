import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';

import { HttpClient } from '@angular/common/http';
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

//Metodo get 
servicioUsuariosGet(){
    return new Promise( resolve => {
      this.http.get('https://mbsi69vq93.execute-api.us-east-2.amazonaws.com/test').subscribe(data => {
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
   this.http.post('https://mbsi69vq93.execute-api.us-east-2.amazonaws.com/test', datosUsuarios ).subscribe(data => {
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
   return new Promise(resolve=>{
     this.http.delete(' https://mbsi69vq93.execute-api.us-east-2.amazonaws.com/test', id).subscribe(data=>{
     resolve(data);
     console.log('^^^^^^^^OK_Delete^^^^^^^^^^>\n');
     console.log(data);
     console.log('^^^^^^^^^^^^^^^^^^^\n');
    }, error=>{
     console.log('–––––––––––ERROR––DELETE–––––––––\n');
     console.log(JSON.stringify( error));
     console.log('–––––––––––––––––––––––––\n');
     });
   });
}



  
}
