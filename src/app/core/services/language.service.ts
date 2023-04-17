import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from 'ngx-webstorage';
import { SplashScreenService } from 'src/app/layouts/splash-screen/splash-screen.component';
import { EventService } from './event.service';
import { GlobalStyleService } from './styles.service';

export const langs = {
  en: {
    text: 'english',
    lang: 'en',
    icon: 'assets/images/lang-flags/en.png'
  },
  ar_male: {
    text: 'arabic',
    lang: 'ar',
    icon: 'assets/images/lang-flags/ar.png'
  },

}
@Injectable({ providedIn: 'root' })
export class LanguageService {
  public languages: any[] = Object.values(langs).map(l => l.lang);
  public currentLang = 'en';
  constructor(
    public translate: TranslateService,
    private localStorageService: LocalStorageService,
    private globalStyleService: GlobalStyleService,
    private splashScreenService: SplashScreenService,
    private eventService: EventService) {
    let browserLang;
    this.translate.addLangs(this.languages);
    if (this.localStorageService.retrieve('lang')) {
      browserLang = this.localStorageService.retrieve('lang');
    }
    else {
      browserLang = translate.getBrowserLang();
    }
   
   
    this.currentLang = translate.currentLang;
    this.setLanguage(browserLang.match(/en|ar/) ? browserLang : 'en')
  }

  public setLanguage(lang: string, reload = false) {
    this.localStorageService.store('lang', lang);
    if(reload){
      location.reload();
      this.splashScreenService.show();
      return;
      
    }
    this.translate.use(lang);
    this.currentLang = lang;
    this.eventService.broadcast('lang', { lang });
    if (lang === 'ar') {
      document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
      this.globalStyleService.addTheme('bs-rtl')
    } else {
      document.getElementsByTagName('html')[0].setAttribute('dir', 'ltr');
      this.globalStyleService.removeTheme('bs-rtl')
    }
  }

}
