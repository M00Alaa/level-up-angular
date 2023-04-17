import { Component, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SplashScreenService } from 'src/app/layouts/splash-screen/splash-screen.component';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})
export class DetailsComponent {
  constructor(private _ActivatedRoute: ActivatedRoute,
    
    private router: Router,
    private render: Renderer2,
    public lang: TranslateService,
    private splashScreen: SplashScreenService) {  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.mainJSActivator();
      this.wordSwapper();
    }, 10);
  }

  mainJSActivator() {
    let revScript = document.createElement('script');
    revScript.src = '/assets/js/main.js';
    revScript.id = "MAIN_JS";
    this.render.appendChild(document.body, revScript);
    this.splashScreen.hide();

  }

  wordSwapper() {
    let revScript = document.createElement('script');
    revScript.src = '/assets/js/words-swap.js';
    revScript.id = "WORD_SWAPPER_JS";
    this.render.appendChild(document.body, revScript);
    this.splashScreen.hide();

  }

}
