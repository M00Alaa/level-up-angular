import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { SplashScreenService } from 'src/app/layouts/splash-screen/splash-screen.component';

export const services: any = [];

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.less'],
})
export class HomepageComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(
    public lang: TranslateService,
    private render: Renderer2,
    private splashScreen: SplashScreenService,
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.splashScreen.show();
  }

  ngAfterViewInit(): void {
    this.mainJSActivator();
    this.wordSwapper();
  }

  mainJSActivator() {
    let revScript = document.createElement('script');
    revScript.src = '/assets/js/main.js';
    revScript.id = 'MAIN_JS';
    this.render.appendChild(document.body, revScript);
    setTimeout(() => {
      this.splashScreen.hide();
    }, 100);
  }
  wordSwapper() {
    let revScript = document.createElement('script');
    revScript.src = '/assets/js/words-swap.js';
    revScript.id = 'WORD_SWAPPER_JS';
    this.render.appendChild(document.body, revScript);
  }

  ngOnDestroy(): void {
    document.getElementById('REV_SLIDER')?.remove();
    document.getElementById('MAIN_JS')?.remove();
    document.getElementById('WORD_SWAPPER_JS')?.remove();
  }
}
