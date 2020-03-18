import { Component, HostBinding } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  temperatura="2";
  gaugeType = "semi";
  gaugeValue ;
  gaugeLabel = "temperatura";
  gaugeAppendText = "°C";
  min=-10;
  max=50;
  thresholdConfig = {
    '0': {color: 'green'},
    '20': {color: 'orange'},
    '30': {color: 'red'}
};
}
