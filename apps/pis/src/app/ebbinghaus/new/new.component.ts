import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { EbbinghausService } from '../ebbinghaus.service';
import { KPDto } from '@pis/api-interfaces';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'pis-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  htmlContent = '';
  isLoading = false;

  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: '25rem',
      minHeight: '0',
      maxHeight: 'auto',
      width: '80%',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
};

id = 0;
constructor(private cdRef : ChangeDetectorRef,
  private ebbinghausService: EbbinghausService,
  private avtiveroute: ActivatedRoute,
  private route: Router) {}

  ngOnInit() {
    const idStr = this.avtiveroute.snapshot.paramMap.get("id");
    if( idStr !== '' && +idStr > 0 ) {
      this.id = parseInt(idStr, 10);
      this.ebbinghausService.get(this.id).subscribe(data => (this.htmlContent  = data.content));
    }
  }

  onSubmit() {
    const dto = new KPDto();
    dto.content = this.htmlContent;
    dto.id = this.id;

    console.log("in new.component.ts:  dto.content " + dto.content );
    this.ebbinghausService.edit(dto).
    subscribe(
      () => this.route.navigateByUrl('/knowledgepoint/list')
    );
  }

  cancel() {
    this.route.navigateByUrl('/knowledgepoint/list')
  }

}
