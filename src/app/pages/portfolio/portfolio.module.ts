import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { PortfolioComponent } from './portfolio.component';


const routes: Route[] = [
  {
    path: '',
    component: PortfolioComponent,
    data: {
      navConfigs: {
        light: false,
        static: false,
        withBG: false
      }
    }
  },
 
]

@NgModule({
  declarations: [
    PortfolioComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class PortfolioModule { }
