import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {

  constructor(private http: HttpClient) { }
 
 // url:string ='https://mbsi69vq93.execute-api.us-east-2.amazonaws.com/test';

  // getUsuarios(){
  //   return new Promise (resolve=>{
  //     this.http.get(this.url).subscribe(data=>{
  //        resolve(data);
  //     }, (error)=>{
  //       console.log(error);
  //     });
  //   });
  // }

  // getResultados(){
  //   return  this.http.get('https://mbsi69vq93.execute-api.us-east-2.amazonaws.com/test');
  // }


  servicioUsuarios(){
    return new Promise( resolve => {
      this.http.get('https://mbsi69vq93.execute-api.us-east-2.amazonaws.com/test').subscribe(data => {
        resolve(data);
        console.log(data);
      }, (error) => {
        console.log(error);
      });
    });

  }
  
}
