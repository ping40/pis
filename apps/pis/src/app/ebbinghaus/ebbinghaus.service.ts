import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PageCondition, KPListDto, KPDto, KPDetailDto } from '@pis/api-interfaces';

@Injectable()
export class EbbinghausService {
  
  constructor(private httpClient: HttpClient) {}
  
  edit(dto: KPDto): Observable<KPDto> {    
    return this.httpClient.post<KPDto>('/api/knowledgepoints', dto);
  }
    
  list(cond: PageCondition): Observable<KPListDto[]> {
    return this.httpClient.post<KPListDto[]>('/api/knowledgepoints/page', cond);
  }

  get(id: number): Observable<KPDetailDto> {
    return this.httpClient.get<KPDetailDto>('/api/knowledgepoints/' + id);
  }

  review(id: number): Observable<any> {
    return this.httpClient.post<any>('/api/knowledgepointlogs/', {kpId: id} );
  }

 }
