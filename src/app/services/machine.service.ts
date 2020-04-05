import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { MachineGroup } from '../models/machine-group';

@Injectable({
  providedIn: 'root'
})
export class MachineService {

  baseUrl = environment.apiUrl + 'machines/';

  constructor(private http: HttpClient) { }

  getMachineGroups(): Observable<MachineGroup[]> {
    return this.http.get<MachineGroup[]>(this.baseUrl);
  }

  // ToDo: Implement method getMachine(id)
}
