import { Injectable } from '@angular/core';

import {
  Observable,
  of,
} from 'rxjs';

import { SelectOptions } from '../../../../lib/select-multiple';

@Injectable({
  providedIn: 'root',
})
export class LoadDocumentsService {
  constructor() {}

  public exec(): Observable<SelectOptions[]> {
    return of([
      {
        label: 'Cedula',
        value: '1',
      },
      {
        label: 'Pasaporte',
        value: '2',
      },
    ]);
  }
}
