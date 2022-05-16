import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularioreactivo',
  templateUrl: './formularioreactivo.component.html',
  styleUrls: ['./formularioreactivo.component.css']
})

export class FormularioreactivoComponent implements OnInit {
    contacForm = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl(''),
    email: new FormControl('',[Validators.required, Validators.email])
  });

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    
    console.log(this.contacForm.value);
  }

}
