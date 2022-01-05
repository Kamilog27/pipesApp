import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
  nombreLower:string="camilo";
  nombreUpper:string="CAMILO";
  nombreCompleto:string="jUAn cAmIlO"

  fecha:Date=new Date(); //El día de hoy
  constructor() { }

  ngOnInit(): void {
  }

}
