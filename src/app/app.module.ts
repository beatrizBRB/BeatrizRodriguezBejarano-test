import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//IMPORTS DE COMPONENTES DE MI APLICACION
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';

//IMPORTS DE MODULOS DE MI APLICACION
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FormsModule } from '@angular/forms';//importado para hacer el formulario
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './shared/footer/footer.component';

/*import { FormComponent } from './components/form/form.component';*/// importado para hacer el formulario


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactoComponent,
    NavbarComponent,
    CardComponent,
    FooterComponent
    /*FormComponent*/
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule, 
    RouterTestingModule,
    FormsModule,// importado para hacer el formulario
    ReactiveFormsModule// importado para hecr el formulario

  
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
