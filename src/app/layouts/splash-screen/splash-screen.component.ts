import { Component, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class SplashScreenService {
  shown = new BehaviorSubject<boolean>(false);
  show(){
    this.shown.next(true);
  }
  hide(){
    this.shown.next(false);
  }
  
}
@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.less']
})
export class SplashScreenComponent   {

  constructor(public ss: SplashScreenService) { }


}
