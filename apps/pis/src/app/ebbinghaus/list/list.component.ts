import {HttpClient} from '@angular/common/http';
import {Component, ViewChild, AfterViewInit, ChangeDetectorRef} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {of} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {PageCondition, KPListDto} from '@pis/api-interfaces'
import { EbbinghausService } from '../ebbinghaus.service';

@Component({
  selector: 'pis-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements AfterViewInit {
  fromIndex = 1;
  displayedColumns: string[] = ['fromIndex', 'title', 'created', 'state'];
  data: KPListDto[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator, {static: false}) paginator123: MatPaginator;

  constructor(private _httpClient: HttpClient,
    private cdRef : ChangeDetectorRef,
    private ebbinghausService: EbbinghausService) {}

  ngAfterViewInit() {

    this.paginator123.page.pipe(
        startWith({}),
        switchMap(() => {
          console.log("in 0102 " + new Date() );
          this.isLoadingResults = true;
          const cond: PageCondition= new PageCondition(10, this.paginator123.pageIndex);
          return this.ebbinghausService.list(cond);
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.fromIndex = this.paginator123.pageIndex * 10 + 1;
          this.resultsLength = 1000;//data.total_count;

          return data;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return of([]);
        })
      ).subscribe(data => {
        this.data = data;
        this.cdRef.detectChanges();
      });
  }
}
