import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {
  map,
  Observable,
} from 'rxjs';

import { environment } from '../../../../../environments/environment';
import { SelectOptions } from '../../../../lib/select-multiple';
import {
  selectServiceResponse2Selectoptions,
} from '../mappers/select-service-response-2-select-option';
import { SelectServiceResponse } from '../models/select-service-response';

@Injectable({
  providedIn: 'root',
})
export class LoadDocumentsService {
  constructor(private httpClient: HttpClient) {}

  public exec(): Observable<SelectOptions[]> {
    return this.httpClient
      .get<SelectServiceResponse[]>(`${environment.api.url}/documents`)
      .pipe(
        map((response) => response.map(selectServiceResponse2Selectoptions))
      );
  }
}
