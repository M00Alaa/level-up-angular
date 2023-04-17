// import { ToastrService } from 'ngx-toastr';
import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../auth.service';

import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-testing-commissioning',
  templateUrl: './testing-commissioning.component.html',
  styleUrls: ['./testing-commissioning.component.less']
})
export class TestingCommissioningComponent implements AfterViewInit {

  registerForm: FormGroup = new FormGroup({
    first_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    last_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    age: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
  })

  submitForm(data: FormGroup) {

    this._AuthService.register(data.value).subscribe({
      next: (res) => {
        if (res === 'success') {
          // this.toastr.success('register success', '');
          console.log('register success');
          

          this._Router.navigate(['/sign-in'])
        }
        else {
          // this.toastr.error(res, 'error message!');
          console.log('error message!' + res);
           
        }
        
      }
    })
  }

  goToSignin() {
    this._Router.navigate(['/login'])
  }

  constructor(private render: Renderer2,
    public langService: TranslateService, 
    private _AuthService: AuthService, private _Router: Router /*,private toastr: ToastrService*/) {
    
     
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
