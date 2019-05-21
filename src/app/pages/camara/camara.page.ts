import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage implements OnInit {

  constructor(private camera:Camera, public loaderCont:LoadingController) { }
  currentImage: string;
  image:string= null;
  
  ngOnInit() {
    
  }

  async Load(){
    let cargar=  await this.loaderCont.create({
      duration:200,
      message:'Cargando',
      showBackdrop:true
    })
    cargar.present();
  }

  openCam(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      // saveToPhotoAlbum: false,
      // correctOrientation: true
    }
    this.camera.getPicture(options).then((imageData) => {
      //this.image =  imageData;
      this.Load();
     this.image=(<any>window).Ionic.WebView.convertFileSrc(imageData);
     
    }, (err) => {
     alert("error "+JSON.stringify(err))
    });
  }

}
