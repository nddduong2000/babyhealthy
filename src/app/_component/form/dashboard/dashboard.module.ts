import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeaderDashboardComponent } from './header-dashboard/header-dashboard.component';
import { BannerComponent } from './banner/banner.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { ArticleComponent } from './article/article.component';
import { ExploreComponent } from './explore/explore.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    HeaderDashboardComponent,
    BannerComponent,
    IntroduceComponent,
    ArticleComponent,
    ExploreComponent,
    FooterComponent,
  ],
  exports: [
    HeaderDashboardComponent,
    BannerComponent,
    IntroduceComponent,
    ArticleComponent,
    ExploreComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
