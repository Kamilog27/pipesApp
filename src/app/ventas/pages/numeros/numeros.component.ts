import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [
  ]
})
export class NumerosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ventasNetas:number=2567789.5567;
  porcentaje:number=0.48;

}
