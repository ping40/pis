import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EbbinghausService } from '../ebbinghaus.service';
import { KPDetailDto, KPCommentDto } from '@pis/api-interfaces';

@Component({
  selector: 'pis-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.css']
})
export class MemoComponent implements OnInit {
  content: string;

  ngOnInit() {
  }

  constructor(
  private ebbinghausService: EbbinghausService,
    public dialogRef: MatDialogRef<MemoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: KPDetailDto) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  addComment() {
    const c = new KPCommentDto();
    c.kpId = this.data.id;
    c.content = this.content;
    this.ebbinghausService.addComment(c).
    subscribe(()=>{
      this.dialogRef.close();
    });
  }

}
