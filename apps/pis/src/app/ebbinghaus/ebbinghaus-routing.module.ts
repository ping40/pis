import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { AuthGuard } from '../shared/auth/auth.guard';

const knowledgePointRoutes: Routes = [
  { path: 'knowledgepoint', component: ListComponent , canActivate: [AuthGuard]},
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