import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-testing-commissioning',
  templateUrl: './testing-commissioning.component.html',
  styleUrls: ['./testing-commissioning.component.less']
})
export class TestingCommissioningComponent implements AfterViewInit {

  constructor(private render: Renderer2,
    public langService: TranslateService) {
    
     
  }


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
