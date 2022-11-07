import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-industry',
  templateUrl: './industry.component.html',
  styleUrls: ['./industry.component.css']
})
export class IndustryComponent implements OnInit {

  myImage ='assets/img/person-2.jpg'

  myPicture ='assets/img/Biz-img.jpg'

  myPix = 'assets/img/biz-biz.jpg'

  myImg = 'assets/img/small-img.jpg'

  myBank = 'assets/img/zenith.png'

  myProfile = 'assets/img/profile-img.jpg'

 
  
  constructor() { }

  ngOnInit(): void {
  }


}
