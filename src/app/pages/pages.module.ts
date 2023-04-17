import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutsModule } from '../layouts/layouts.module';
import { SharedModule } from '../shared/shared.module';
import { Error404Component } from './error404/error404.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SlicePipe } from './homepage/slice.pipe';
import { RequestQuoteComponent } from './request-quote/request-quote.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { TestingCommissioningComponent } from './testing-commissioning/testing-commissioning.component';



@NgModule({
  declarations: [
    HomepageComponent,
    RequestQuoteComponent,
    Error404Component,
    SlicePipe,
    ComingSoonComponent,
    TestingCommissioningComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    LayoutsModule
  ]
})
export class PagesModule { }
