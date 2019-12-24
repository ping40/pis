import { Component, OnInit, Inject } from "@angular/core";
import { EbbinghausService } from "../ebbinghaus.service";
import { ActivatedRoute, Router } from "@angular/router";
import { KPDetailDto } from "@pis/api-interfaces";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { MemoComponent } from '../memo/memo.component';

@Component({
  selector: "pis-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
  id = 0;
  dto = new KPDetailDto(0, "", 0);

  constructor(
    private ebbinghausService: EbbinghausService,
    private avtiveroute: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.id = parseInt(this.avtiveroute.snapshot.paramMap.get("id"), 10);
    this.getData();
  }

  private getData() {
    this.ebbinghausService.get(this.id).subscribe(data => (this.dto = data));
  }

  review() {
    this.ebbinghausService.review(this.id).subscribe(() => {
      this.ebbinghausService.get(this.id).subscribe(data => (this.dto = data));
    });
  }

  delete() {
    this.ebbinghausService.delete(this.id).subscribe(() => {
      this.router.navigate(['/knowledgepoint/list']);
    });
  }

  edit() {
      this.router.navigate(['/knowledgepoint/edit/' + this.id]);
  }

  addmemo() {
    const dialogRef = this.dialog.open(MemoComponent, {
      width: "500px",
      disableClose: true,
      data: this.dto
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getData();
    });
  }
}
