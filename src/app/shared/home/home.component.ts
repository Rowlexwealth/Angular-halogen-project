import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myImage ='assets/img/person-2.jpg'

  myPicture ='assets/img/Biz-img.jpg'

  myPix = 'assets/img/biz-biz.jpg'

  myImg = 'assets/img/small-img.jpg'

  myBank = 'assets/img/zenith.png'

  myProfile = 'assets/img/profile-img.jpg'

  constructor() { }

  ngOnInit(): void {
  }

   // Carousel - step-2
   images = [
    {
      imageSrc: 'assets/img/person-3.jpg',
      imageAlt: 'nature1'
    },
    {
      imageSrc: 'assets/img/person-2.jpg',
      imageAlt: 'nature1'
    },
    {
      imageSrc: 'assets/img/profile-img.jpg',
      imageAlt: 'nature1'
    },
    {
      imageSrc: 'assets/img/person-2.jpg',
      imageAlt: 'nature1'
    },
  ]

}
