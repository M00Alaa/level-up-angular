import { AfterViewInit, Component, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { timer } from 'rxjs';
import { waLink } from 'src/app/app-const';
import { ContactService } from 'src/app/core/services/contact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.less']
})
export class ContactUsComponent implements AfterViewInit{
  waLink = waLink;
  activeToSending = true;
  contactForm = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    mobile: new FormControl('',Validators.required),
    message: new FormControl('',Validators.required),
  })
  constructor(private render: Renderer2, 
    private contact: ContactService,
    private translate: TranslateService,
    ) { }

  
  ngAfterViewInit(): void {
    this.mainJSActivator();
    
  }
  formSubmitted = false;

  sending = false;
  sendMsg(){
    this.formSubmitted = true;
    if(this.contactForm.valid){
      this.sending = true;
      const timerd = timer(1000 * 60 * 30);
      this.contact.sendMsg({
        name:this.contactForm.value.name,
        email: this.contactForm.value.email,
        phone:this.contactForm.value.mobile,
        message:this.contactForm.value.message,
      }).subscribe(data => {
        Swal.fire(this.translate.currentLang === 'en'? 'We received your message':'تم استلام رسالتك' ,this.translate.currentLang === 'en'? 'We\'ll contact you as soon as possible': 'سيتم الرد في أقرب وقت .. نشكرك لتواصلك', 'success');
        Swal.update({
          confirmButtonColor: '#16db65',
          confirmButtonText: this.translate.currentLang === 'en'? 'Ok': 'إغلاق'
        });
        this.activeToSending = false;
        this.sending = false;
        this.formSubmitted = false;
        this.contactForm.reset();
        timerd.subscribe(() => {
          this.activeToSending = true;
        })
      }, () => {
        this.sending = false;
        Swal.fire(this.translate.currentLang === 'en'? 'An error has been occurred':'حدثت مشكلة أعد المحاولة من فضلك', '', 'error')
        Swal.update({
          confirmButtonColor: '#16db65',
          confirmButtonText: this.translate.currentLang === 'en'? 'Ok': 'إغلاق',
        });
      });


    }
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
