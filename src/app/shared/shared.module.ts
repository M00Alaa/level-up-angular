import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { VideoPlayerComponent } from './components/video-player/video-player.component';


const libs = [
  ReactiveFormsModule,
  TranslateModule
]

@NgModule({
  declarations: [
    VideoPlayerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [libs,
    VideoPlayerComponent]
})
export class SharedModule { }
