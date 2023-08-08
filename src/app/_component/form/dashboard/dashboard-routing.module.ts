import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard.component'
import {LayoutComponent} from "./layout/layout.component";

const DashBoardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '', component: LayoutComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(DashBoardRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
