import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PageCondition, KPListDto, KPDto, KPDetailDto, KPCommentDto } from '@pis/api-interfaces';

@Injectable()
export class EbbinghausService {
  
  constructor(private httpClient: HttpClient) {}
  
  edit(dto: KPDto): Observable<KPDto> {
    if( dto.id > 0) {
      return this.httpClient.put<KPDto>('/api/knowledgepoints', dto);
    } else {
      return this.httpClient.post<KPDto>('/api/knowledgepoints', dto);
    }    
  }
    
  list(cond: PageCondition): Observable<KPListDto[]> {
    return this.httpClient.post<KPListDto[]>('/api/knowledgepoints/page', cond);
  }

  todayReview(): Observable<KPListDto[]> {
    return this.httpClient.get<KPListDto[]>('/api/knowledgepoints/today/review');
  }

  get(id: number): Observable<KPDetailDto> {
    return this.httpClient.get<KPDetailDto>('/api/knowledgepoints/' + id);
  }

  review(id: number): Observable<any> {
    return this.httpClient.post<any>('/api/knowledgepointlogs/', {kpId: id} );
  }
  
  delete(id: number): Observable<any> {
    return this.httpClient.delete<any>('/api/knowledgepoints/' + id );
  }
  
  addComment(c: KPCommentDto): Observable<any> {
    return this.httpClient.post<any>('/api/knowledgepointcomments', c);
  }

 }
