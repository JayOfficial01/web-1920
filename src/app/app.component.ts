import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  points = [
    'Lorem ipsum dolor sit amet.',
    ' Aliquam tincidunt mauris eu risus.',
    ' Morbi in sem quis dui placerat ornare, Pellentesque.',
    'Nunc dignissim risus id metus.',
    ' Integer vitae libero ac risus egestas placerat.',
    ' Vivamus vestibulum ntulla nec ante.',
    'Praesent placerat risus quis eros.',
    ' Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  ];

  malls = [
    {
      image: '../assets/images/malls/amazon-mall.png',
      heading: 'Amazon Mall',
    },
    {
      image: '../assets/images/malls/centorous-mall.png',
      heading: 'Centorous Mall',
    },
    {
      image: '../assets/images/malls/giga-mall.png',
      heading: 'Giga Mall',
    },
  ];

  features = [
    {
      image: '../assets/images/about/interview.png',
      heading: 'Lorem Ipsum Dolor',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      image: '../assets/images/about/research.png',
      heading: 'Lorem Ipsum Dolor',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      image: '../assets/images/about/features.png',
      heading: 'Lorem Ipsum Dolor',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      image: '../assets/images/about/web.png',
      heading: 'Lorem Ipsum Dolor',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      image: '../assets/images/about/android.png',
      heading: 'Lorem Ipsum Dolor',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      image: '../assets/images/about/progress.png',
      heading: 'Lorem Ipsum Dolor',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
  ];

  steps = [
    {
      heading: 'step 1',
      title: 'Lorem Ipsum',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, veniam?',
      icon: '../assets/images/icons/step-one.png',
    },
    {
      heading: 'step 2',
      title: 'Lorem Ipsum',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: '../assets/images/icons/step-two.png',
    },
    {
      heading: 'step 3',
      title: 'Lorem Ipsum',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
      icon: '../assets/images/icons/step-three.png',
    },
    {
      heading: 'step 4',
      title: 'Lorem Ipsum',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: '../assets/images/icons/step-four.png',
    },
    {
      heading: 'step 5',
      title: 'Lorem Ipsum',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
      icon: '../assets/images/icons/step-five.png',
    },
    {
      heading: 'step 6',
      title: 'Lorem Ipsum',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.',
      icon: '../assets/images/icons/step-six.png',
    },
  ];

  testimonials = [
    {
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Integer enim.',
      userImage: '../assets/images/testimonials/testimonial-one.png',
      name: 'Lorem Ipsum',
      designation: 'Lorem ipsum dolor sit',
      bgColor: '#23ce6b',
    },
    {
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      userImage: '../assets/images/testimonials/testimonial-two.png',
      name: 'Lorem Ipsum',
      designation: 'Lorem ipsum dolor sit',
      bgColor: '#08083d',
    },
    {
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      userImage: '../assets/images/testimonials/testimonial-three.png',
      name: 'Lorem Ipsum',
      designation: 'Lorem ipsum dolor sit',
      bgColor: '#6184d8',
    },
    {
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      userImage: '../assets/images/testimonials/testimonial-four.png',
      name: 'Lorem Ipsum',
      designation: 'Lorem ipsum dolor sit',
      bgColor: '#23ce6b',
    },
    {
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore!',
      userImage: '../assets/images/testimonials/testimonial-five.png',
      name: 'Lorem Ipsum',
      designation: 'Lorem ipsum dolor sit',
      bgColor: '#6184d8',
    },
  ];
}
