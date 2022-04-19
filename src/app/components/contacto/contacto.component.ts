import { Component, OnInit, Output, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
//servicio importado al agregar el servicio al constructor

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})

export class ContactoComponent implements OnInit {

 /* miFormulario: FormGroup = new FormGroup({  
    nombre: new FormControl(''),
    apellidos: new FormControl(''),
    edad: new FormControl(''),
    numero: new FormControl(''),
    email: new FormControl(''),
    descripcion: new FormControl(''),

  })*/

  //decorador input en duda
  /*recibidoPadre: string;*/
  @Input() miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    apellidos: ['', Validators.required],
    edad: ['', [Validators.required, Validators.min(16), Validators.max(55)]],
    numero: ['', [Validators.required, Validators.pattern(/^((\\+91-?)|0)?[0-9]{9}$/),]],
    email: ['', Validators.required],
    descripcion: [''],

  })
  //añado en el constructor servicioDeDatos con el nombre del servicio
  constructor ( private fb: FormBuilder) { 
    
  }

  campoEsValido ( campo: string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  ngOnInit(): void {
  }

  //agragmos esta funcion para llamarla en el evento click del boton
  agregarDatos(){
    console.log(this.miFormulario.value)
    /*this.recibidoPadre = this.nombre.value*/
  }


}

