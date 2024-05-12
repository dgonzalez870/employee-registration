import { Injectable } from '@angular/core';

import {
  Observable,
  of,
} from 'rxjs';

import { SelectOptions } from '../../../../lib/select-multiple';

@Injectable({
  providedIn: 'root',
})
export class LoadJobAreasService {
  constructor() {}

  public exec(): Observable<SelectOptions[]> {
    return of([
      {
        label: 'DevTest',
        value: '1',
      },
      {
        label: 'Opperation',
        value: '2',
      },
    ]);
  }
}
