import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { TechRoutingModule } from './tech-routing.module';
import { material } from '../shared/common.material';
import { RxzipComponent } from './rxzip/rxzip.component';

@NgModule({
  declarations: [IndexComponent, RxzipComponent],
  imports: [
    CommonModule,
    ...material,
    TechRoutingModule
  ],
  entryComponents:[
    RxzipComponent
  ]
})
export class TechModule { }
