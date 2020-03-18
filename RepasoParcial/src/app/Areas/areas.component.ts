import { Component, OnInit } from '@angular/core';
import { AreaServicioService } from '../Servicios/area-servicio.service';
import { area, detail } from '../Servicios/areas';


@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent implements OnInit {
  visible=true;
  constructor(private _listar: AreaServicioService) { this.listaAreas(); }
  titulo="titulo";
  areas: area[];
  details: detail = {
    "town": '--',
    "boss": "--",
    "age": 0,
    "last_degree": "--"
  };

  boton(item: area) {
    this.details = item.details[0];
  }

  async listaAreas() {
    await this._listar.listarAreas().toPromise().then(us => {
      this.areas = us.areas;
    });
  }
  binding(){
    this.visible=!this.visible;
  }

  ngOnInit() {
  }

}
