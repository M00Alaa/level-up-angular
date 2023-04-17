import { AfterViewInit, Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.less']
})
export class Error404Component implements AfterViewInit {

  constructor(private render: Renderer2){}

  ngAfterViewInit(): void {
    this.mainJSActivator();
    
  }

  mainJSActivator(){
    let revScript = document.createElement('script');
    revScript.src = '/assets/js/main.js';
    revScript.id = "MAIN_JS";
    this.render.appendChild(document.body,revScript);
  }

  ngOnDestroy(): void {
     document.getElementById('MAIN_JS')?.remove();
  }

}
