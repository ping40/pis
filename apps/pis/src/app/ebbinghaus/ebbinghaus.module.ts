import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { NewComponent } from './new/new.component';
import { CommonMaterialModule } from '../common/common.material';
import { EbbinghausRoutingModule } from './ebbinghaus..module';

@NgModule({
  declarations: [ListComponent, DetailComponent, NewComponent],
  imports: [
    CommonModule,
    CommonMaterialModule,
    EbbinghausRoutingModule
  ]
})
export class EbbinghausModule { }
