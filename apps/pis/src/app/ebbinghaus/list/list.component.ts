import {Component, ViewChild, AfterViewInit, ChangeDetectorRef, ElementRef, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {of, Observable, fromEvent, merge, Subject} from 'rxjs';
import {catchError, map, startWith, switchMap, debounce, debounceTime} from 'rxjs/operators';
import {PageCondition, KPListDto} from '@pis/api-interfaces'
import { EbbinghausService } from '../ebbinghaus.service';
import { Router } from '@angular/router';
import { ListUIService, ListUI } from './listui.service';

@Component({
  selector: 'pis-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements AfterViewInit, OnInit {
  
  fromIndex = 1;
  displayedColumns: string[] = ['fromIndex', 'title', 'created', 'state', 'action'];
  data: KPListDto[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  subject = new Subject();

  selected = 'all';
  @ViewChild('inputFilter', {static: false})
  inputFilter:ElementRef;
  
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(private cdRef : ChangeDetectorRef,
    private ebbinghausService: EbbinghausService,
    private route: Router,
    private listUIService: ListUIService) {}

    listUIValue = {} as ListUI;
    ngOnInit(): void {
      this.listUIValue = this.listUIService.getValue();
      console.log("listUIValue: " + JSON.stringify(this.listUIValue));
     }
  
    ngAfterViewInit() {

    const eventObservable = fromEvent(
      this.inputFilter.nativeElement, 'keyup')
      .pipe(
        map((e:any) => e.target.value),
        debounceTime(250), //only search after 250 ms
      ).subscribe((searchTerm)=> this.listUIService.updateParam({searchTerm}));

      this.listUIService.pipe(
  // merge(this.paginator.page,  eventObservable, this.subject).
    // pipe(
      //  startWith({}),
        switchMap((v) => {
          console.log("call  pis-api  0102 , " + JSON.stringify(v) ) ;
          this.isLoadingResults = true;
          if (v.filter === 'today') {
            return this.ebbinghausService.todayReview();
          } else {
            const cond: PageCondition= new PageCondition(10, v.page);
            cond.filterContent = v.searchTerm;
            return this.ebbinghausService.list(cond);
          }
        }),
        map(data => {
          const v = this.listUIService.getValue();

          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.fromIndex =v.page * 10 + 1;
          if (v.filter === 'today') {
             if (data) {
               this.resultsLength = data.length;//data.total_count;
             } else {
               this.resultsLength = 0;
             }
          } else {
            this.resultsLength = 1000;//data.total_count;
          }
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

  scopeChange() {
    console.log("scopeChange " + JSON.stringify(this.listUIValue));
    this.listUIService.updateParam({'filter':  this.listUIValue.filter});
  }

  detail(id: number) {
    this.route.navigate([`/knowledgepoint/detail/${id}`])
  }
}
