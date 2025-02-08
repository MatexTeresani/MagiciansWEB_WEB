import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const nav = document.querySelector('nav');
    if (nav) {
      nav.classList.toggle('active');
    }
  }
  ngOnInit() {
    window.addEventListener('scroll', function() {
      const header = document.querySelector('header');
      if (header) {
        if (window.scrollY > 0) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    });
}
}
