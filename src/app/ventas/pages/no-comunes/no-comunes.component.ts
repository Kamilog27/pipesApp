import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //i18nSelect
  nombre: string = "Camilo"
  genero: string = "masculino"

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }
  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Camilo']
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente() {
    this.nombre = 'Laura'
    this.genero = "femenino"
  }
  borrarCliente() {
    this.clientes.shift()
  }


  //KeyValue Pipe
  persona = {
    nombre: 'Camilo',
    edad: 22,
    direccion: 'Bogotá, Colombia'

  }

  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
    }
  ]

  //Async Pipe
  miObservable=interval(1000)
  valorPromesa=new Promise( (resolve,reject)=>{
    setTimeout(()=>{
      resolve('Tenemos data de Promesa')
    },3500)
  } )
}
