import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IPersona } from './persona';

@Injectable()
export class PersonasService {

  private apiURL = this.baseUrl + "api/personas";

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getPersonas(): Observable<IPersona[]> {
    return this.http.get<IPersona[]>(this.apiURL);
  }

  getPersona(personaId: string): Observable<IPersona> {
    let params = new HttpParams().set('incluirDirecciones', "true");
    return this.http.get<IPersona>(this.apiURL + '/' + personaId, {params: params});
  }

  createPersona(persona: IPersona): Observable<IPersona> {
    return this.http.post<IPersona>(this.apiURL, persona);
  }

  updatePersona(persona: IPersona): Observable<IPersona> {
    return this.http.put<IPersona>(this.apiURL + "/" + persona.id.toString(), persona);
  }

  deletePersona(personaId: string): Observable<IPersona> {
    return this.http.delete<IPersona>(this.apiURL + "/" + personaId);
  }

}
