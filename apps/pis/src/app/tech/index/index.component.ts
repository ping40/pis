import { Component, OnInit } from '@angular/core';
import { RxzipComponent } from '../rxzip/rxzip.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'pis-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(
    public dialog: MatDialog) { }

  ngOnInit() {
  }

  openRxzip() {
    this.dialog.open(RxzipComponent, {
      width: "80%",
      disableClose: true
    });
  }
}
