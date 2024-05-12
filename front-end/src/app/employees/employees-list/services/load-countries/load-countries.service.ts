import { Injectable } from '@angular/core';

import {
  Observable,
  of,
} from 'rxjs';

import { SelectOptions } from '../../../../lib/select-multiple';

@Injectable({
  providedIn: 'root'
})
export class LoadCountriesService {

  constructor() { }

  public exec(): Observable<SelectOptions[]> {
    return of([
      {
        label: 'Colombia',
        value: '1',
      },
      {
        label: 'estados Unidos',
        value: '2',
      },
    ]);
  }
}
