import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import videojs from 'video.js';

import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class VidPlayerService {
  public playingVid = new BehaviorSubject<any>(null);
  
  trackPlayed(player: any){
    if(player !==  this.playingVid?.value){
      this.playingVid?.value?.pause();
      this.playingVid.next(player)
    }
  }
  
}

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.less']
})
export class VideoPlayerComponent implements OnInit {
  @ViewChild('target', { static: true }) target!: ElementRef;

  // See options: https://videojs.com/guides/options
  @Input() options: {
    fluid?: boolean,
    aspectRatio?: string,
    height?: undefined | number,
    width?: undefined | number | any,
    preload?: 'auto' | 'metadata' | 'none',
    autoplay?: boolean,
    controls?: boolean,
    audioPosterMode?: boolean;
    sources?: {
      src: string,
      type: string,
    }[],
  } = {

    };


  public  playing = false;
  player: any = null;

  constructor(
    private vidPlayerService: VidPlayerService,
  ) {

  

   }

  // Instantiate a Video.js player OnInit
  ngOnInit() {
    this.player = videojs(this.target.nativeElement, { ...this.options, preload: 'metadata', muted: false }, () => {
      this.player.addClass('vjs-matrix');
      this.player.on('play', () => { 
        this.playing = true;
        this.vidPlayerService.trackPlayed(this.player);
      });
      this.player.on('pause', () => { 
        this.playing = false;
      });
    });
    this.player.addClass('vjs-matrix');
  }

  // Dispose the player OnDestroy
  ngOnDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }

}

