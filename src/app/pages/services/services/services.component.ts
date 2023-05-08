import { AfterViewInit, Component, Renderer2 } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SplashScreenService } from 'src/app/layouts/splash-screen/splash-screen.component';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.less'],
})
export class ServicesComponent implements AfterViewInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
  })

  submitForm(data: FormGroup) {
    this._AuthService.login(data.value).subscribe({
      next: (res) => {
        if (res.message === 'success') {
          localStorage.setItem('token', res.date)
          this._AuthService.saveCurrentUser()
          // this.toastr.success('logged in success', '');
          console.log('logged in success');

          this._Router.navigate(['/'])
        }
        else {
          // this.toastr.error(res, 'error message!');

          alert(res);

        }

        console.log(res);

      }
    })


  }

  constructor(
    private render: Renderer2,
    public lang: TranslateService,
    private splashScreen: SplashScreenService,
    private _AuthService: AuthService, private _Router: Router, /*private toastr: ToastrService*/
  ) { }

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
    this.splashScreen.hide();
  }

  wordSwapper() {
    let revScript = document.createElement('script');
    revScript.src = '/assets/js/words-swap.js';
    revScript.id = 'WORD_SWAPPER_JS';
    this.render.appendChild(document.body, revScript);
    this.splashScreen.hide();
  }

  ngOnDestroy(): void {
    document.getElementById('MAIN_JS')?.remove();
    document.getElementById('WORD_SWAPPER_JS')?.remove();
  }
}
