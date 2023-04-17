import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactUsComponent } from './contact-us.component';

const routes: Route[] = [
  {
    path: '',
    component: ContactUsComponent,
    data: {
      navConfigs: {
        light: false,
        withBG: false,
        static: false,

      }
    }
  }
]

@NgModule({
  declarations: [
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactUsModule { }
