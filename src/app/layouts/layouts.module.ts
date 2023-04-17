import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { BasicComponent } from './basic/basic.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TopbarComponent } from './shared/topbar/topbar.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { FilterObjectsPipe } from './shared/topbar/filter-objects.pipe';



@NgModule({
  declarations: [
    BasicComponent,
    TopbarComponent,
    FooterComponent,
    SplashScreenComponent,
    FilterObjectsPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [BasicComponent,  ]
})
export class LayoutsModule { }
