import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';



import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideComponent } from './Frontend/side/side.component';
import { ToolbarComponent } from './Frontend/toolbar/toolbar.component';
import {ContentComponent} from './Frontend/content/content.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgxGaugeModule } from 'ngx-gauge';
import {ProgressBarModule} from "angular-progress-bar"
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';

import { IMqttMessage, MqttModule, IMqttServiceOptions} from 'ngx-mqtt';
import { DashboardComponent } from './Frontend/Sensores/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { TemperaturaComponent } from './Frontend/Sensores/temperatura/temperatura.component';
import { HumedadComponent } from './Frontend/Sensores/humedad/humedad.component';
import { UsuariosComponent } from './Frontend/Usuarios/usuarios/usuarios.component';
import { LuminosidadComponent } from './Frontend/Sensores/luminosidad/luminosidad.component';
import { LoginComponent } from './Frontend/Usuarios/Form/form.component';


export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = { 
  hostname: 'localhost',
  port: 9001,
  path: '/mqtt'
};

@NgModule({
  declarations: [
    AppComponent,
    SideComponent,
    ToolbarComponent,
    ContentComponent,
    DashboardComponent,
    TemperaturaComponent,
    HumedadComponent,
    UsuariosComponent,
    LuminosidadComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    NgxGaugeModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS),
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    LayoutModule,
    HttpClientModule,
    ProgressBarModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
