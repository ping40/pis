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


constructor(private cdRef : ChangeDetectorRef,
  private ebbinghausService: EbbinghausService,
  private route: Router) {}

  ngOnInit() {
  }

  onSubmit() {
    const dto = new KPDto();
    dto.content = this.htmlContent;
    this.ebbinghausService.edit(dto).
    subscribe(
      () => this.route.navigate(['/knowledgepoint/list'])
    );
  }

}
