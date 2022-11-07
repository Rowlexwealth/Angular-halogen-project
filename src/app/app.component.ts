import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-web';

  // Carousel - step-2
  images = [
    {
      imageSrc: 'assets/img/person-2.jpg',
      imageAlt: 'nature1'
    },
    // {
    //   imageSrc: 'assets/img/person-3.jpg',
    //   imageAlt: 'nature1'
    // },
    // {
    //   imageSrc: 'assets/img/profile-img.jpg',
    //   imageAlt: 'nature1'
    // },
    // {
    //   imageSrc: 'assets/img/person-2.jpg',
    //   imageAlt: 'nature1'
    // },
  ]
}
