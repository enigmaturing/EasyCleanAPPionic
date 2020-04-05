import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Tariff } from '../models/tariff';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TariffService {

  constructor(private http: HttpClient) { }

  baseUrl = environment.apiUrl + 'tariffs/';

  getTariffsOfMachineGroup(id: number): Observable<Tariff[]> {
    return this.http.get<Tariff[]>(this.baseUrl + 'machinegroup/' + id);
  }

}
