import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lembretes } from '../interfaces/lembretes';

@Injectable({
  providedIn: 'root'
})
export class LembreteService {

  constructor(private http: HttpClient) { }

  getListaLembretes(): Observable<Lembretes[]> {
    const url = `${environment.lembretesApiUrl}/lembrete`;
    return this.http.get<Lembretes[]>(url);
  }

  getLembrete(id: number): Observable<Lembretes> {
    const url = `${environment.lembretesApiUrl}/lembrete/${id}`;
    return this.http.get<Lembretes>(url);
  }

  addLembrete(lembrete: Lembretes): Observable<Lembretes> {
    const url = `${environment.lembretesApiUrl}/lembrete/`;
    return this.http.post<Lembretes>(url, lembrete);
  }

  atualizaLembrete(lembrete: Lembretes): Observable<Lembretes> {
    const url = `${environment.lembretesApiUrl}/lembrete/${lembrete.id}`;
    return this.http.put<Lembretes>(url, lembrete);
  }

  deletaLembrete(id: number): Observable<Lembretes> {
    const url = `${environment.lembretesApiUrl}/lembrete/${id}`;
    return this.http.delete<Lembretes>(url);
  }
}
