import { Component, OnInit } from '@angular/core';
import { EbbinghausService } from '../ebbinghaus.service';
import { ActivatedRoute, Router } from '@angular/router';
import { KPDetailDto } from '@pis/api-interfaces';

@Component({
  selector: 'pis-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id = 0;
  dto = new KPDetailDto(0,'',0);

  constructor(
    private ebbinghausService: EbbinghausService,
    private avtiveroute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.id = parseInt(this.avtiveroute.snapshot.paramMap.get('id'), 10);

    this.ebbinghausService.get(this.id).
    subscribe((data)=> this.dto = data);
 }

 review() {
   this.ebbinghausService.review(this.id).
   subscribe(()=>{    
    this.ebbinghausService.get(this.id).
    subscribe((data)=> this.dto = data); 
  });
 }

 addmemo() {
   
 }
}
