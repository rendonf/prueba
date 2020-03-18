import { Component, OnInit, Output,EventEmitter, Host } from '@angular/core';
import { SideComponent } from '../side/side.component';
import { usr } from 'src/app/Services/usr';
import { UsuariosComponent } from '../Usuarios/usuarios/usuarios.component';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  
  
  constructor( 
    @Host() public _side: SideComponent
    ){

  }
  fusuarios(){
    this._side.cusuarios = !this._side.cusuarios ;
    this._side.csensores = true;
    this._side.creportes = true;
  }
  fsensores(){
    this._side.cusuarios = true ;
    this._side.csensores = !this._side.csensores;
    this._side.creportes = true;
  }
  freportes(){
    this._side.cusuarios = true;
    this._side.csensores = true;
    this._side.creportes = !this._side.creportes ;
  }

}
