import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class LoginComponent implements OnInit {

  form=true;
  usuarios=false;
  contacto: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }
  nombre="n";
  correo="c";
  apellido="a";
  contrasena="cl";
    ngOnInit() {
        this.contacto = this.formBuilder.group({
            n: ['', Validators.required],            
            email: ['', [Validators.required, Validators.email]],
            a: ['', Validators.required],
            cl: ['', [Validators.required, Validators.minLength(6)]]
        });
    }
 
    get f() { return this.contacto.controls; }
 
    onSubmit() {
        this.submitted = true;
 
        if (this.contacto.invalid) {
            return;
        }
 
        alert('Mensaje Enviado !')
    }

}
