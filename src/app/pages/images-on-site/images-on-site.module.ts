import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { ImagesOnSiteRoutingModule } from './images-on-site-routing.module';
import { ImagesOnSiteComponent } from './images-on-site.component';


@NgModule({
  declarations: [
    ImagesOnSiteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ImagesOnSiteRoutingModule,
    SharedModule
  ]
})
export class ImagesOnSiteModule { }
