import { Component, OnInit } from '@angular/core';
import { IMqttMessage,MqttService } from 'ngx-mqtt';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-luminosidad',
  templateUrl: './luminosidad.component.html',
  styleUrls: ['./luminosidad.component.scss']
})
export class LuminosidadComponent  {

  constructor(private _mqttService: MqttService) { this.mqtt();}

  gaugeType = "semi";
  gaugeValuet ;
  gaugeLabel = "Luminosidad";
  min=0;
  max=5000;
  gaugeAppendText = "lux";
  thresholdConfig = {
    '0': {color: 'green'},
    '1000': {color: 'orange'},
    '1500': {color: 'red'}

  }
  private subscription: Subscription;
  messageh: string;
  ctemperatura="";
  mqtt(){
    this.subscription = this._mqttService.observe('nando/luminosidad').subscribe((message: IMqttMessage) => {
      this.messageh = message.payload.toString();
      this.ctemperatura=this.messageh;
      this.gaugeValuet =  parseFloat( this.messageh);
      //console.log(this.messageh+" luminosidad");

    });
  }

}
