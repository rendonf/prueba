import { Component, Host } from '@angular/core';
import { ServiciosAllUsuarios } from 'src/app/Services/GET/servicios.allusuarios';
import { usr } from 'src/app/Services/usr';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ServiceUpdUsuarios } from 'src/app/Services/PUT/service.updusuarios';
import { SideComponent } from '../../side/side.component';
import { LoginComponent } from '../Form/form.component';



@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})

export class UsuariosComponent {
  act = true;
  hid = false;
  usuarios: usr[];
  usuario: usr;

  dataSource1;
  columnsToDisplay;
  columnsToDisplay1;
  m;
  constructor(
    private _listar: ServiciosAllUsuarios,
    private _actualizar: ServiceUpdUsuarios,
    @Host() public _form: LoginComponent
  ) {
    this.mostrarUsuarios();
  }

  async mostrarUsuarios() {
    await this._listar.listar().toPromise().then(us => {
      this.usuarios = us;
      console.log(us);
    });
    this.dataSource1 = this.usuarios;
    this.columnsToDisplay = ['Id', 'Nombre', 'Apellido', 'Correo'];
    this.columnsToDisplay1 = ['id', 'usrNombre', 'usrApellido', 'usrCorreo'];
    this.m = this.usuarios.length / 5;


  }
  expandedElement1: usr | null;


  eliminar(item) {
    console.log(item);
  }
  async a(item){
    
    this._form.form=false;
    this._form.usuarios=true;
    // await this._actualizar.actualizar(item).toPromise().then(us => {
    //   this.usuario = us;
    // });
    console.log(item);
  }

  
  maxindex = 5;
  minindex = 0;
  next() {



    if (this.minindex + 5 < this.usuarios.length) {
      this.minindex = this.minindex + 5;
      this.maxindex = this.maxindex + 5;
    }
    console.log(this.maxindex);
    console.log(this.minindex);
  }
  previus() {
    this.maxindex = this.maxindex - 5;
    this.minindex = this.minindex - 5;
    if (this.minindex < 0) {
      this.maxindex = 5;
      this.minindex = 0;
    }
    console.log(this.maxindex);
    console.log(this.minindex);

  }

}






