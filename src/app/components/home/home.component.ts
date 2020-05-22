import { Component, OnInit } from '@angular/core';

import { MaquinaService } from "../../services/maquina.service";

import { Maquina } from "../../models/Maquina";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  auth: boolean;
  maquinasNuevas: Maquina[];
  maquinasSegunda: Maquina[];

  constructor(private maquinaService: MaquinaService) { }

  ngOnInit(){
    this.getMaquinas();
  }

  getMaquinas(): void {
    this.maquinaService.getMaquinas().subscribe(data => {
      this.auth = data.auth;
      if(this.auth){
        this.maquinasNuevas = data.maquinasNuevas;
        this.maquinasSegunda = data.maquinasSegunda;
      }
      else{
        let msg = 'Prueba de error'/* data.msg */;
        alert(msg);
      }
    });
  }

  clickCard(id: string): void{
    console.log("click " + id);
  }

}
