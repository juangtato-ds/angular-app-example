import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordService {

  constructor() { }

  getAdditionalBlackList(): Array<string> {
    // Recovered from somewhere
    return ['invalid'];
  }
}
