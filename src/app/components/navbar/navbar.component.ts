import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  btnActive = false;
  backgroundActive = false;

  constructor() {}

  ngOnInit(): void {
    this.onWindowScroll();
  }

  onBtnActive() {
    this.btnActive = !this.btnActive;
  }

  onWindowScroll() {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 30) {
        this.backgroundActive = true;
      } else {
        this.backgroundActive = false;
      }
    });
  }
}
