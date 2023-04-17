import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from '../layouts/basic/basic.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { Error404Component } from './error404/error404.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RequestQuoteComponent } from './request-quote/request-quote.component';
import { TestingCommissioningComponent } from './testing-commissioning/testing-commissioning.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    component: BasicComponent,
    children: [
      {
        path: '',
        canActivate: [AuthGuard],
        component: HomepageComponent,
        data: {
          navConfigs: {
            light: false,
            withBG: false,
            static: false,

          }
        }
      },
      {
        path: 'sign-up',
        component: TestingCommissioningComponent,
        data: {
          navConfigs: {
            light: false,
            withBG: false,
            static: false,
          }
        }
      },
      {
        path: 'sign-in',
        loadChildren: () => import('./services/services.module').then(m => m.ServicesModule),
        data: {
          navConfigs: {
            light: true,
            withBG: true,
            static: true,
          }
        }
      },
      {
        path: 'about',
        canActivate: [AuthGuard],
        loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule),
        data: {
          navConfigs: {
            light: false,
            withBG: false,
            static: false,
          }
        }
      },
      {
        path: 'quizzes',
        canActivate: [AuthGuard],
        loadChildren: () => import('./images-on-site/images-on-site.module').then(m => m.ImagesOnSiteModule),
        data: {
          navConfigs: {
            light: false,
            withBG: false,
            static: false,
          }
        }
      },
      {
        path: 'quiz-levels/:name/quistions/:quName',
        canActivate: [AuthGuard],
        loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsModule),
        data: {
          navConfigs: {
            light: false,
            withBG: false,
            static: false,
          }
        }
      },
      {
        path: 'quiz-categories/:name',
        canActivate: [AuthGuard],
        component: RequestQuoteComponent,
        data: {
          navConfigs: {
            light: false,
            withBG: false,
            static: false,
          }
        }
      },
      {
        path: 'quiz-levels/:name',
        canActivate: [AuthGuard],
        component: ComingSoonComponent,
        data: {
          navConfigs: {
            light: false,
            withBG: false,
            static: false,
          }
        }
      },

      {
        path: '**',
        component: Error404Component,
        data: {
          navConfigs: {
            static: false,
            light: false
          }
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
