import { Component, Input, OnInit, Output, } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ContactoComponent } from '../contacto/contacto.component';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  

  constructor() { }

    
  ngOnInit(): void {
    
  }
  hola(){
    console.log("hola")
  }

}






