import { Component, OnInit, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CategoriesService } from '../categories.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-request-quote',
  templateUrl: './request-quote.component.html',
  styleUrls: ['./request-quote.component.less'],
})

export class RequestQuoteComponent implements OnInit {


  currentName: string = '';

  Categories: any[] = [];

  constructor(private _CategoriesService: CategoriesService, private _ActivatedRoute: ActivatedRoute, private render: Renderer2,
    public lang: TranslateService){
    _ActivatedRoute.params.subscribe((res)=>{
      this.currentName = res['name']
      console.log(this.currentName);
    })
   }
  

  getCategories(){
    this._CategoriesService.getCategories(this.currentName).subscribe((res)=>{
      this.Categories = res;      
    })
  }

  
  ngOnInit(): void {
    this.getCategories();
  }


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
  }

  wordSwapper() {
    let revScript = document.createElement('script');
    revScript.src = '/assets/js/words-swap.js';
    revScript.id = 'WORD_SWAPPER_JS';
    this.render.appendChild(document.body, revScript);
  }

  ngOnDestroy(): void {
    document.getElementById('MAIN_JS')?.remove();
    document.getElementById('WORD_SWAPPER_JS')?.remove();
  }
}
