import { Component, Input, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent  {
  constructor() { } 
  toggle() {
    console.log("entro");
    this.isOpen = !this.isOpen;
  }

  cusuarios = false ;
  csensores = true;
  creportes = true;
  isOpen = false;
  
}

/** @title Sidenav open & close behavior */

