import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PageCondition, KPListDto } from '@pis/api-interfaces';

@Injectable()
export class EbbinghausService {
  
  constructor(private httpClient: HttpClient) {}
  
  list(cond: PageCondition): Observable<KPListDto[]> {
    return this.httpClient.post<KPListDto[]>('/api/knowledgepoints/page', cond);
  }

 }
