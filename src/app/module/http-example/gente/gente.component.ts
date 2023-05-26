import { Component, OnInit } from '@angular/core';
import { Gente } from '../models/gente';
import { SwapiService } from '../services/swapi.service';

@Component({
  selector: 'app-gente',
  templateUrl: './gente.component.html',
  styleUrls: ['./gente.component.scss']
})
export class GenteComponent implements OnInit {

  persona?: Gente;

  constructor(private swapi: SwapiService) { }

  ngOnInit(): void {

    this.swapi.getData(1).subscribe({
      next: (data) => {
        console.log('Usando http');
        console.log(data);
        this.persona = data;
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })


    // Llamamos al metodo del servicio que usa fetchData (fetch), 
    // la gestion en el componente es similar a la empleada con getData (http)

    this.swapi.fetchData(1)
      .then((data) => {
        console.log('Usando fetch');
        console.log(data);
        this.persona = data;
      })
      .catch((e) => {
        console.error(e);
      })

  }

}
