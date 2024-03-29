import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcommerceDashboardComponent } from './ecommerce-dashboard/ecommerce-dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

// echarts - lib: https://github.com/xieziyu/ngx-echarts
import { NgxEchartsModule } from 'ngx-echarts';
import { DashboardsService } from './dashboards.service';
import { CrmDashboardComponent } from './crm-dashboard/crm-dashboard.component';
import { EcommerceDashboardResolver, CrmDashboardResolver } from './dashboards.resolver';

export const dashboardRoutes = [
  {
    path: '',
    redirectTo: 'ecommerce'
  },
  {
    path: 'ecommerce',
    component: EcommerceDashboardComponent,
    resolve: {
      data : EcommerceDashboardResolver
    }
  },
  {
    path: 'crm',
    component: CrmDashboardComponent,
    resolve: {
      data : CrmDashboardResolver
    }
  }
];

@NgModule({
  declarations: [EcommerceDashboardComponent, CrmDashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes),
    // NgxEchartsModule,
    NgxEchartsModule.forRoot({
      /**
       * This will import all modules from echarts.
       * If you only need custom modules,
       * please refer to [Custom Build] section.
       */
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
    SharedModule
  ],
  providers: [
    DashboardsService,
    EcommerceDashboardResolver,
    CrmDashboardResolver
  ]
})
export class DashboardsModule { }
