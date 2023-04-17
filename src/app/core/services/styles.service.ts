import { Injectable } from '@angular/core';
import { SplashScreenService } from 'src/app/layouts/splash-screen/splash-screen.component';



@Injectable({
  providedIn: 'root'
})
export class GlobalStyleService {
  public dark = false;
  constructor(
    private spiner: SplashScreenService,
  ) {
   
  }



  private loadCss(href: string, id: string): Promise<Event> {
    return new Promise((resolve, reject) => {
      const style = document.createElement('link');
      style.rel = 'stylesheet';
      style.href = href;
      style.id = id;
      style.onload = resolve;
      style.onerror = reject;
      document.head.append(style);
    });
  }

 

  // add theme for lib
  addTheme(name: string){
    const theme = name;
    this.removeTheme(name);
    this.spiner.show();
    return new Promise<Event>((resolve, reject) => {
      this.loadCss(`${theme}.css`, theme).then(
        (e) => {
          setTimeout(() => {
            this.spiner.hide();
          }, 1500);
          resolve(e);
        },
        (e) => {
          this.spiner.hide();
          reject(e);
        }
      );
    });
  }
  // remove theme for lib
  removeTheme(name: string): void {
    const themeElement = document.getElementById(name);
    if (themeElement) {
      document.head.removeChild(themeElement);
    }
  }
}
