import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  // TODO type configuration
  private config: any;

  constructor() {
    this.config = environment
  }

  get<T>(path: string): T | undefined;
  get<T>(path: string, defaultValue: T): T;
  get<T>(path: string, defaultValue?: T): T | undefined {
    // TODO this is actually real tricky
    let current = this.config;
    for (const p of path.split('.')) {
      if (current && (p in current)) {
        current = current[p];
      } else {
        current = undefined;
        break;
      }
    }

    return (current !== undefined && current !== null) ? (current as T) : defaultValue;
  }
}
