import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter, map } from 'rxjs/operators';
import { LanguageService, langs } from 'src/app/core/services/language.service';
import { AuthService } from 'src/app/pages/auth.service';
export interface NavConfigs {
  light: boolean;
  static: boolean;
  withBG: boolean;
}
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.less'],
})
export class TopbarComponent implements OnInit {

  isLogin: boolean = false

  logOut() {
    this._AuthService.logOut()
  }
  ngOnInit(): void {

  }

  @ViewChild('navbar') navbar!: ElementRef;
  navConfigs: NavConfigs = {
    light: false,
    static: false,
    withBG: false,
  };
  langs = Object.values(langs);

  windowWidth = window.innerWidth;
  constructor(
    router: Router,
    public lang: TranslateService,
    public langService: LanguageService,
    activatedRoute: ActivatedRoute,
    private _AuthService: AuthService
  ) {
    router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let child = activatedRoute.firstChild;
          while (child?.firstChild) {
            child = child?.firstChild;
          }
          if (child?.snapshot.data.navConfigs && this.windowWidth > 767) {
            return child.snapshot.data.navConfigs;
          }
          return null;
        })
      )
      .subscribe((navConfigs: NavConfigs) => {
        this.navConfigs = navConfigs;
      });

    this._AuthService.currentUser.subscribe({
      next: () => {
        if (this._AuthService.currentUser.getValue() != null) {
          this.isLogin = true
        }
        else {
          this.isLogin = false
        }
      }
    })

  }

  hideNavbar() {
    this.navbar.nativeElement?.classList?.remove('show');
  }
  removeClass() {
    document.getElementById('classShow')?.classList?.remove('open');
  }


  switchLang(lang: string) {
    this.langService.setLanguage(lang, true);
  }
}
