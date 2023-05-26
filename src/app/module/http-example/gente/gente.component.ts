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

  constructor(private swapi: SwapiService){ }

  ngOnInit(): void {
    this.swapi.getData(1).subscribe({
      next: (data) => {
        console.log(data);
        this.persona = data;
        // this.persona.born = data.birth_year;
      },
      error: (e) => console.log(e),
      complete: () => console.info('complete')
    })

  }

}
