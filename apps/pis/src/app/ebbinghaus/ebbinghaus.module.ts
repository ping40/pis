import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { NewComponent } from './new/new.component';
import { EbbinghausRoutingModule } from './ebbinghaus-routing.module';
import { AuthModule } from '../shared/auth/auth.module';
import { AuthGuard } from '../shared/auth/auth.guard';
import { material } from '../shared/common.material';
import { EbbinghausService } from './ebbinghaus.service';
import { MydatePipe } from '../shared/pipe/mydate.pipe';
import { KpStatusPipe } from '../shared/pipe/kpStatus.pipe';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { MemoComponent } from './memo/memo.component';
import { ListUIService } from './list/listui.service';

@NgModule({
  declarations: [
    ListComponent, 
    DetailComponent, 
    NewComponent, 
    MydatePipe, 
    KpStatusPipe, 
    MemoComponent
  ],
  imports: [
    ...material,
    AuthModule,
    CommonModule,
    EbbinghausRoutingModule,
    AngularEditorModule
  ],
  providers:[
    AuthGuard,
    EbbinghausService,
    ListUIService
  ],
  entryComponents:[
    MemoComponent,
    DetailComponent
  ]
})
export class EbbinghausModule { }
