import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { MachineUsage } from '../models/machine-usage';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  baseUrl = environment.apiUrl + 'sales/';

  constructor(private http: HttpClient) { }

  makeMachineUsage(machineUsage: MachineUsage) {
    return this.http.post(this.baseUrl + 'machineUsages', machineUsage);
  }
}
