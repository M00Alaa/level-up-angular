import { AfterViewInit, Component, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-images-on-site',
  templateUrl: './images-on-site.component.html',
  styleUrls: ['./images-on-site.component.less']
})
export class ImagesOnSiteComponent implements AfterViewInit {


  constructor(
    private render: Renderer2,
    public lang: TranslateService
    ) { }


  ngAfterViewInit(): void {
    this.mainJSActivator();
  }


  mainJSActivator() {
    let revScript = document.createElement('script');
    revScript.src = '/assets/js/main.js';
    revScript.id = "MAIN_JS";
    this.render.appendChild(document.body, revScript);
  }

  ngOnDestroy(): void {
    document.getElementById('MAIN_JS')?.remove();
  }


}
