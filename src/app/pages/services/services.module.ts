import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailsComponent } from './details/details.component';
import { ServicesComponent } from './services/services.component';

const routes: Route[] = [
  {
    path: '',
    component: ServicesComponent,
    data: {
      navConfigs: {
        light: true,
        withBG: true,
        static: true,

      }
    }
  },
 
  {
    path: 'details/:id',
    component: DetailsComponent,
    data: {
      navConfigs: {
        light: true,
        withBG: true,
        static: true,

      }
    }
  },
 
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
]

@NgModule({
  declarations: [
    ServicesComponent,
    DetailsComponent,
 
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ServicesModule { }
