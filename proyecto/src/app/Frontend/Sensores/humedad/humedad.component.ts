import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MqttService, IMqttMessage } from 'ngx-mqtt';



@Component({
  selector: 'app-humedad',
  templateUrl: './humedad.component.html',
  styleUrls: ['./humedad.component.scss']
})


export class HumedadComponent {
  constructor(private _mqttService: MqttService) {
    this.mqtt();
  }
  private subscription: Subscription;
  messageh: string;
  chumedad="";

  mqtt(){
    this.subscription = this._mqttService.observe('nando/humedad').subscribe((message: IMqttMessage) => {
      this.messageh = message.payload.toString();
      this.chumedad=this.messageh;
      this.gaugeValueh =  parseFloat( this.messageh);
      
    });
  }
  gaugeType = "semi";
  gaugeValueh ;
  gaugeLabel = "humedad";
  gaugeAppendText = "%";
  thresholdConfig = {
    '0': {color: 'green'},
    '40': {color: 'orange'},
    '75.5': {color: 'red'}
};
  

}


    
  

