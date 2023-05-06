import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import { FormArray, UntypedFormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { SplashScreenService } from 'src/app/layouts/splash-screen/splash-screen.component';
import { CategoriesService } from '../categories.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.less']
})
export class QuizResultComponent implements OnInit, AfterViewInit, OnDestroy {

  currentName: string = '';
  levelName: string = '';
  resultMessage: any;
  resultDegree: any;

  isTest: boolean = false;

  Resources: any[] = [];


  constructor(
    public lang: TranslateService,
    private render: Renderer2,
    private splashScreen: SplashScreenService,
    private _fb: UntypedFormBuilder,
    private _CategoriesService: CategoriesService,
    private _ActivatedRoute: ActivatedRoute
  ) {
    _ActivatedRoute.params.subscribe((res) => {
      this.currentName = res['name'];

      this.levelName = res['quName'];


      if (res['message']) {
        this.resultMessage = res['message'];
      }
      if (res['Level']) {
        this.isTest = true
        this.resultMessage = res['Level'];
      }

      if (res['degrees']) {
        this.resultDegree = res['degrees'];
      }
      else {
        this.resultDegree = res['Degree'];
      }

    });
  }

  getResources() {
    this._CategoriesService
      .getResources(this.currentName, this.levelName)
      .subscribe((res) => {
        this.Resources = res[0].Resource.R_book; /** this is our resources array => show it in html */
        console.log(this.Resources);
      });
  }

  ngOnInit(): void {
    this.splashScreen.show();

    if (this.resultMessage == 'faild') {
      this.getResources();
    }
  }

  ngAfterViewInit(): void {
    this.mainJSActivator();
    this.wordSwapper();
    this.revCall();
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

  revCall() {
    let revScript = document.createElement('script');
    revScript.src = '/assets/js/revcall.js';
    revScript.id = 'REV_SLIDER';
    this.render.appendChild(document.body, revScript);
  }

  ngOnDestroy(): void {
    document.getElementById('REV_SLIDER')?.remove();
    document.getElementById('MAIN_JS')?.remove();
    document.getElementById('WORD_SWAPPER_JS')?.remove();
  }
}
