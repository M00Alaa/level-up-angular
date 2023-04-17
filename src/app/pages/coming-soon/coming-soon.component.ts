import { AfterViewInit, Component, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.less']
})
export class ComingSoonComponent implements AfterViewInit {
  currentId: string = '';
  products: any;
  bg = '/assets/images/img/sections-bg/bg-1.jpg';

  constructor(private render: Renderer2,
    public lang: TranslateService,
    private _ActivatedRoute: ActivatedRoute,) { }


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
