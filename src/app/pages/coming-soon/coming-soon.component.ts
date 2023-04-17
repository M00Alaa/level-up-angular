import { AfterViewInit, Component, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.less']
})
export class ComingSoonComponent implements AfterViewInit {
  
  currentName: string = '';

  levels: any[] = [];

  constructor(private _CategoriesService: CategoriesService, private _ActivatedRoute: ActivatedRoute, private render: Renderer2,
    public lang: TranslateService){
    _ActivatedRoute.params.subscribe((res)=>{
      this.currentName = res['name']
      console.log(this.currentName);
    })
   }
  

   getLevels(){
    this._CategoriesService.getLevels(this.currentName).subscribe((res)=>{
      this.levels = res[0];
    })
  }

  
  ngOnInit(): void {
    this.getLevels();
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
