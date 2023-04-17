import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagesOnSiteComponent } from './images-on-site.component';

const routes: Routes = [
  {
    path: '',
    component: ImagesOnSiteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImagesOnSiteRoutingModule { }
