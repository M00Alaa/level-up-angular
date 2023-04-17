import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from '../layouts/basic/basic.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { Error404Component } from './error404/error404.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RequestQuoteComponent } from './request-quote/request-quote.component';
import { TestingCommissioningComponent } from './testing-commissioning/testing-commissioning.component';

const routes: Routes = [
  {
    path: '',
    component: BasicComponent,
    children: [
      {
        path: '',
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
        path: 'products',
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
        path: 'portfolio',
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
        path: 'after-sales',
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
        path: 'contact-us',
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
        path: 'request-quote',
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
        path: 'coming-soon/:id',
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
        path: 'coming-soon',
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
        path: 'testing-commissioning',
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
