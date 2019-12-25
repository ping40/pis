import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {  zip, timer } from 'rxjs';

interface ZipObject {
  value:  any;
  date: number;
}
@Component({
  selector: 'pis-rxzip',
  templateUrl: './rxzip.component.html',
  styleUrls: ['./rxzip.component.css']
})
export class RxzipComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RxzipComponent>) { }

  zipResult: ZipObject[] = [];
  slowResult: ZipObject[] = [];
  quickResult: ZipObject[] = [];

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  begin() {
    console.log("in begin");
    this.zipResult = [];
    this.slowResult = [];
    this.quickResult = [];

    const slow = timer(2000, 5000); 
    const quick = timer(2000, 2000); 
 
    const quickOne = quick.subscribe(x =>{
      this.quickResult.push({value: x,
      date: new Date().getSeconds()});
    } );

    const slowOne = slow.subscribe(x =>{
      this.slowResult.push({value: x,
      date: new Date().getSeconds()});
    } );

    let count = 0;
    const one = zip( slow,  quick).subscribe(x =>{
      if ( count > 5) {
       one.unsubscribe();
       slowOne.unsubscribe();
       quickOne.unsubscribe();
      }
      count++;

      this.zipResult.push({value: x,
      date: new Date().getSeconds()});
    } );

  }
}
