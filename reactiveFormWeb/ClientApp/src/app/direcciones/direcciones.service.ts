import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DireccionesService {

  private apiURL = this.baseUrl + "api/direcciones";

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  deleteDirecciones(ids: number[]): Observable<void> {
    return this.http.post<void>(this.apiURL + "/delete/list", ids);
  }

}
