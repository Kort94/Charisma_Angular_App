import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import SwiperCore, { Keyboard, Pagination, Navigation, Virtual } from 'swiper';
import { trigger, state, style, animate, transition } from '@angular/animations';

SwiperCore.use([Keyboard, Pagination, Navigation, Virtual]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../../styles.scss'],
  animations: [
    trigger('fade', [ 
      transition('void => *', [
        style({ opacity: 1 }), 
        animate('300ms ease-in')
      ]) 
    ])
  ],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {

  
  SlideContent = [
    {imageURL: 'url(../../assets/img/bg-img/bg-.jpg)',
    h5Content: 'Recognise',
    h3Content: 'We are a doctrinal and dynamic household of faith with a passion to:',
    h2Content: 'Mature saints in CHRIST',
    classc: 'justify-content-end'
    },
    {imageURL: 'url(../../assets/img/bg-img/bg-three.jpg)',
    h5Content: 'Raise',
    h2Content: 'Mature leaders in CHRIST',
    classc: 'justify-content-end'
  },
    {imageURL: 'url(../../assets/img/bg-img/bg-six.jpg)',
    h5Content: 'Release',
    h2Content: 'Mature churches and ministries in CHRIST',
    classc: ''
  },
  ]

  //ngOnInit(): void {
   // this.slides$.next(
     // Array.from({ length: 3 }).map((el, index) => `Slide ${index + 1}`)
    //);
 // }
}
