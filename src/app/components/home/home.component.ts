import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  todos: any = [];
  impares: any = [];
  pares: any = [];

  cargada: boolean = false;
  
  constructor(private http: HttpClient) { 
    console.log("servicio corriendo");// para probar que funciona
      http.get("https://jsonplaceholder.typicode.com/todos",).subscribe (resp => {
        this.todos = resp;
        this.cargada = true;

        console.log(resp);  
  });

}

  ngOnInit(): void {
  }

}
