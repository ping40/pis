import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { AuthGuard } from '../shared/auth/auth.guard';
import { NewComponent } from './new/new.component';

const knowledgePointRoutes: Routes = [
  { path: 'knowledgepoint/list', component: ListComponent , canActivate: [AuthGuard]},
  { path: 'knowledgepoint/edit', component: NewComponent , canActivate: [AuthGuard]},
  { path: 'knowledgepoint/detail/:id', component: DetailComponent , canActivate: [AuthGuard]}
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