import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent implements OnInit {
  tittle="listado Json API Free";
  userlist:any=[];

  constructor(private usersService:UsersService) {
    console.log("El servis esta ok ...")
   }

  ngOnInit(): void {
    console.log("Componet Ini...");
    this.usersService.getUser()
    .subscribe(response => this.userlist = response );
  }

}
