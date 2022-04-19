import { Component, OnInit, } from '@angular/core';


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
    console.log("hola")//PRUEBA PARA VER QUE SE ENVIA EL HOLA
  }

}






