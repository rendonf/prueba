import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
//formulario @angular material
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
//import {MatInputModule,MatButtonModule,MatSelectModule} from '@angular/material';

//componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreasComponent } from './areas/areas.component';



@NgModule({
  declarations: [
    AppComponent,
    AreasComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    MatButtonModule,
    AppRoutingModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    //formulario @angular material
    FormsModule,ReactiveFormsModule,
    //MatSelectModule,
    //MatInputModule,
    //MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
