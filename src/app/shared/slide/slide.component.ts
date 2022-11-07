import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
  myPix = 'assets/img/biz-biz.jpg'

  myImg = 'assets/img/small-img.jpg'

  myBank = 'assets/img/zenith.png'

  myProfile = 'assets/img/profile-img.jpg'

  constructor() { }

  ngOnInit(): void {
  }

}
