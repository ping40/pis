import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { NewComponent } from './new/new.component';
import { EbbinghausRoutingModule } from './ebbinghaus-routing.module';
import { AuthModule } from '../shared/auth/auth.module';
import { AuthGuard } from '../shared/auth/auth.guard';
import { material } from '../shared/common.material';

@NgModule({
  declarations: [ListComponent, DetailComponent, NewComponent],
  imports: [
    ...material,
    AuthModule,
    CommonModule,
    EbbinghausRoutingModule
  ],
  providers:[
    AuthGuard
  ]
})
export class EbbinghausModule { }
