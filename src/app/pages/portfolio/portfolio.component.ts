import { AfterViewInit, Component, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
declare const gridSet: any;
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.less']
})
export class PortfolioComponent implements AfterViewInit {
  constructor(private render: Renderer2,
    public langService: TranslateService) { }


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
