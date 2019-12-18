import {Component, ViewChild, AfterViewInit, ChangeDetectorRef, ElementRef} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {of, Observable, fromEvent, merge} from 'rxjs';
import {catchError, map, startWith, switchMap, debounce, debounceTime} from 'rxjs/operators';
import {PageCondition, KPListDto} from '@pis/api-interfaces'
import { EbbinghausService } from '../ebbinghaus.service';
import { Router } from '@angular/router';

@Component({
  selector: 'pis-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements AfterViewInit {
  fromIndex = 1;
  filterContent = '';
  displayedColumns: string[] = ['fromIndex', 'title', 'created', 'state', 'action'];
  data: KPListDto[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild('inputFilter', {static: false})
  inputFilter:ElementRef;
  
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(private cdRef : ChangeDetectorRef,
    private ebbinghausService: EbbinghausService,
    private route: Router) {}

  ngAfterViewInit() {

    const eventObservable = fromEvent(
      this.inputFilter.nativeElement, 'keyup')
      .pipe(
        map((e:any) => e.target.value),
        debounceTime(250), //only search after 250 ms
      );

   merge(this.paginator.page,  eventObservable).
     pipe(
        startWith({}),
        switchMap(() => {
          console.log("call  pis-api  0102 , filterContent: " + this.filterContent ) ;
          this.isLoadingResults = true;
          const cond: PageCondition= new PageCondition(10, this.paginator.pageIndex);
          cond.filterContent = this.filterContent;
          return this.ebbinghausService.list(cond);
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.fromIndex = this.paginator.pageIndex * 10 + 1;
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

  detail(id: number) {
    this.route.navigate([`/knowledgepoint/detail/${id}`])
  }
}
