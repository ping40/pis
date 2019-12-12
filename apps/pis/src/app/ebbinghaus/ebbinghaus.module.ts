import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { NewComponent } from './new/new.component';
import { CommonMaterialModule } from '../common/common.material';

@NgModule({
  declarations: [ListComponent, DetailComponent, NewComponent],
  imports: [
    CommonModule,
    CommonMaterialModule
  ]
})
export class EbbinghausModule { }
