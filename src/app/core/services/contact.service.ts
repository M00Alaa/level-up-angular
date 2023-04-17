import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export interface AfterSalesI {
  firstName: string;
  lastName: string;
  jobTitle: string;
  mobile: string;
  company: string;
  email: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  problem: string;
  files: File[];
}
export interface RequestQuoteI {
  firstName: string;
  lastName: string;
  jobTitle: string;
  mobile: string;
  company: string;
  email: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  items: {
    quantity: number;
    model: string;
    desc: number;
  }[];
  howDidYouHearAboutUs: string;
  files: FileList
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  sendMsg(body: { name: string, phone: string, email: string, message: string }): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        "Access-Control-Allow-Origin": '*'
      })
    };
    return this.http.post(environment.api + '/mailing/send-mail.php',
      body, httpOptions)
  }

  afterSales(body: AfterSalesI): Observable<any> {
    if (body) {
      const form = new FormData();

      form.append('firstName', body?.firstName);
      form.append('lastName', body?.lastName);
      form.append('jobTitle', body?.jobTitle);
      form.append('mobile', body?.mobile);
      form.append('company', body?.company);
      form.append('email', body?.email);
      form.append('address', body?.address);
      form.append('city', body?.city);
      form.append('state', body?.state);
      form.append('postalCode', body?.postalCode);
      form.append('country', body?.country);
      form.append('problem', body?.problem);
      
      if (body?.files?.length) {
        for (let i = 0; i < body.files.length; i++) {
          form.append('files[' + i + ']' , body.files[i]);
          
        }
      }
      const httpOptions = {
        headers: new HttpHeaders({
          "Access-Control-Allow-Origin": '*'
        })
      };
      return this.http.post(environment.api + '/mailing/aftersales.php',
      form, httpOptions)
    } else {
      return of(false)
    }



  }
  requestQuote(body: RequestQuoteI): Observable<any> {
    if (body) {
      const form = new FormData();
      console.log(body);
      form.append('firstName', body?.firstName);
      form.append('lastName', body?.lastName);
      form.append('jobTitle', body?.jobTitle);
      form.append('mobile', body?.mobile);
      form.append('company', body?.company);
      form.append('email', body?.email);
      form.append('address', body?.address);
      form.append('city', body?.city);
      form.append('state', body?.state);
      form.append('postalCode', body?.postalCode);
      form.append('country', body?.country);
      form.append('items', JSON.stringify(body?.items || '[]'));
      form.append('howDidYouHearAboutUs', body?.howDidYouHearAboutUs);
      if (body?.files?.length) {
        for (let i = 0; i < body.files.length; i++) {
          form.append('files[' + i + ']' , body.files[i]);
          
        }
      }
      const httpOptions = {
        headers: new HttpHeaders({
          "Access-Control-Allow-Origin": '*'
        })
      };
      return this.http.post(environment.api + '/mailing/order-qoute.php',
      form, httpOptions).pipe(map(res => {
        console.log(res);
        return res;
      }))
    } else {
      return of(false)
    }



  }
}
