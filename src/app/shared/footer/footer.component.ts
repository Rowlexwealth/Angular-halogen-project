import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  myLogo = "assets/img/Layer_x0020_1.png"

  constructor() { }

  ngOnInit(): void {
  }

}
