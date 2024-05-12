import { Injectable } from '@angular/core';

import {
  Observable,
  of,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RemoveService {
  constructor() {}

  exec(id: number): Observable<any> {
    return of(1);
  }
}
