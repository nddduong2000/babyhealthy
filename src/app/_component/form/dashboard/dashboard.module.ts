import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeaderDashboardComponent } from './header-dashboard/header-dashboard.component';
import { BannerComponent } from './banner/banner.component';
import { IntroduceComponent } from './introduce/introduce.component';


@NgModule({
  declarations: [
    HeaderDashboardComponent,
    BannerComponent,
    IntroduceComponent
  ],
  exports: [
    HeaderDashboardComponent,
    BannerComponent,
    IntroduceComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
