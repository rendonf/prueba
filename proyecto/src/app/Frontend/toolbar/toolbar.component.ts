import { Component, Input,HostListener } from '@angular/core';
import { SideComponent } from '../side/side.component';
import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent  {

  constructor() { }

  @Input() sideBar: SideComponent;
  @HostListener('click')
  click() {
    
    this.sideBar.toggle();
    console.log(this.sideBar);
  }

}
