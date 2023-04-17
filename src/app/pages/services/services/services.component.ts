import { AfterViewInit, Component, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SplashScreenService } from 'src/app/layouts/splash-screen/splash-screen.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.less'],
})
export class ServicesComponent implements AfterViewInit {
  constructor(
    private render: Renderer2,
    public lang: TranslateService,
    private splashScreen: SplashScreenService
  ) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.mainJSActivator();
      this.wordSwapper();
    }, 10);
  }

  mainJSActivator() {
    let revScript = document.createElement('script');
    revScript.src = '/assets/js/main.js';
    revScript.id = 'MAIN_JS';
    this.render.appendChild(document.body, revScript);
    this.splashScreen.hide();
  }

  wordSwapper() {
    let revScript = document.createElement('script');
    revScript.src = '/assets/js/words-swap.js';
    revScript.id = 'WORD_SWAPPER_JS';
    this.render.appendChild(document.body, revScript);
    this.splashScreen.hide();
  }

  ngOnDestroy(): void {
    document.getElementById('MAIN_JS')?.remove();
    document.getElementById('WORD_SWAPPER_JS')?.remove();
  }
}
