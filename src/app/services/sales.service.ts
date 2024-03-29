import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { MachineUsage } from '../models/machine-usage';
import { Observable } from 'rxjs';
import { MachineUsageDetailed } from '../models/machine-usage-detailed';
import { DateModel } from '../models/date-model';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  baseUrl = environment.apiUrl + 'sales/';

  constructor(private http: HttpClient) { }

  makeMachineUsage(machineUsage: MachineUsage) {
    return this.http.post(this.baseUrl + 'machineUsages', machineUsage);
  }

  getMachineUsages(): Observable<MachineUsageDetailed[]> {
    return this.http.get<MachineUsageDetailed[]>(this.baseUrl + 'machineUsages');
  }

  getMachineUsagesOnDay(date: DateModel): Observable<MachineUsageDetailed[]> {
    return this.http.post<MachineUsageDetailed[]>(this.baseUrl + 'machineusagesonday', date);
  }
}
