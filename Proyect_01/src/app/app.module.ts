import {Routes,RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewloginComponent } from './newlogin/newlogin.component';
import { BannerComponent } from './banner/banner.component';
import { PieComponent } from './pie/pie.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { FormularioreactivoComponent } from './formularioreactivo/formularioreactivo.component';

//manejo de rutas 
const routes: Routes= [
  {path:'formularioreactivo',component:FormularioreactivoComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'nosotros',component:NosotrosComponent},
  {path:'cuerpo', component:CuerpoComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    NewloginComponent,
    BannerComponent,
    PieComponent,
    CuerpoComponent,
    ContactoComponent,
    NosotrosComponent,
    FormularioreactivoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
