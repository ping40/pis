import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

const knowledgePointRoutes: Routes = [
  { path: 'knowledgepoint', component: ListComponent },
  { path: 'knowledgepoint/:id', component: DetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(knowledgePointRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class EbbinghausRoutingModule { }