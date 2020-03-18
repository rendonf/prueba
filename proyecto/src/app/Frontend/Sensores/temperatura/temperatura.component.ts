import { Component, OnInit, EventEmitter,Output, Host } from '@angular/core';
import {Chart} from 'chart.js';
import { Subscription } from 'rxjs';
import { MqttService, IMqttMessage } from 'ngx-mqtt';
import { DashboardComponent } from '../dashboard/dashboard.component';
@Component({
  selector: 'app-chart',
  templateUrl: './temperatura.component.html',
  styleUrls: ['./temperatura.component.scss']
})
export class TemperaturaComponent implements OnInit {
  
  charte: any = Chart ;
  min : Number;
  op = {
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        stacked: false,
        gridLines: {
          display: true,
          color: "rgba(255,99,132,0.2)"
        }
      }],
      xAxes: [{
        gridLines: {
          display: true
        }
      }]
    }
  };
  ngOnInit() {
    
    this.charte = new Chart('canvas',{
      type: 'line',
      options: this.op,
      data: {
        labels:[],
        datasets: [
          {
            label: '',
            data:[],
            backgroundColor: 'red',
            borderColor:'red',
            fill:false
          },
        ]
      }
    });  
  }
  
  apush(m) {
    var fecha= new Date();
    //var f = fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear();
    var f= fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds();
  // if(fecha.getSeconds()==0){
    this.charte.data.labels.push(f);
    this.charte.data.datasets.forEach((datasets) => {
      datasets.data.push(m);
      
  });
  this.charte.update();
//}
}
  apop(){
    this.charte.data.labels.splice(0,10);
    this.charte.data.datasets.forEach((datasets) => {
      datasets.data.splice(0,10);
  });
  this.charte.update();
  }
  private subscription: Subscription;
   message: string;
  cont=0;
   mqtt(){
    this.subscription = this._mqttService.observe('nando/temperatura').subscribe( (message: IMqttMessage) => {
      this.message = message.payload.toString();
      this.apush(this.message);
      if(this.cont==20){
        this.apop();
        this.cont=0;
        
      }
    
      this.cont++;
      //console.log(this.message+"temperatura");
      this._dashboard.gaugeValue=parseFloat(this.message);
     
    });

  }
  constructor(
    @Host() public _dashboard: DashboardComponent,
    private _mqttService: MqttService) {
    this.mqtt();
    
  }

}