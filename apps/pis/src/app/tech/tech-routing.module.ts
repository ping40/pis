import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';

const techRoutes: Routes = [
  { path: 'tech/list', component: IndexComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(techRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TechRoutingModule { }