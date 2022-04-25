import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string='Tu Supermecado Agro Amigo ';
  category = [{nombre:"Equinos"},  
              {nombre:"Perros"},
              {nombre:"Gatos"},
              {nombre:"Jardineria"},
              {nombre:"Maquinaria"},
    ]
  }
