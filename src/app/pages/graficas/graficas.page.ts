import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { LoadingController } from '@ionic/angular';
//Paquete de intalacion /npm install chart.js --save

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.page.html',
  styleUrls: ['./graficas.page.scss'],
})
export class GraficasPage implements OnInit {

  grafica: any;
  //referencia a la variable de html
  @ViewChild('miGrafica') miGrafica;
  miArrayDatos = [330, 528, 320, 423, 400, 370]

  constructor(private LoadCont:LoadingController) { }

  ngOnInit() {
    this.Loader();
    this.pintarGrafica();
  
  }
  

  //LOADER
 async Loader(){
   let loadController=await this.LoadCont.create({
     duration:3000,
     message:'Cargando..',
     showBackdrop:true
   });
   loadController.present();
 }
 
  //Metodo para mostrar Grafica
  pintarGrafica(){
    var DatosGenerales = [];
    for (var i = 0; i < this.miArrayDatos.length; i++) {
      var DatosGrafica = this.miArrayDatos[i];
      DatosGenerales.push(DatosGrafica);
    }
    this.grafica= new Chart(this.miGrafica.nativeElement,{
      type:'bar', //line
      data:{
        labels:['L','M','M','J','V'],
        datasets:[{
          label:'Resultados',
          data:DatosGenerales,
          backgroundColor: [
            '#64FF33',
            '#15CECB',
            '#1526CE',
            '#AF15CE',
            '#D1D413',
            '#D41C13'
          ],
          borderColor: [
            'red',
            'blue',
            'green',
            'orange',
            'red',
            'black'
          ],
          borderWidth: 1
        }]
      },
      options:{
        scales:{
          yAxes:[{
            ticks:{
              beginAtzero:true
            }
          }]
        }
      }
    });
  }

}
