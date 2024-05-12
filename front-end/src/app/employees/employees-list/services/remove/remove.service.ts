import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RemoveService {
  constructor(private httpClient: HttpClient) {}

  exec(id: number): Observable<any> {
    return this.httpClient.delete(`${environment.api.url}/employees/${id}`);
  }
}
