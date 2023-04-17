import { Component, OnInit } from '@angular/core';
import { TWLink } from 'src/app/app-const';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  TWLink = TWLink;
  constructor() { }

  ngOnInit(): void {
  }

}
