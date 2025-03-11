import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-the-navbar',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './the-navbar.component.html',
  styleUrl: './the-navbar.component.css'
})
export class TheNavbarComponent {

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu() {
    this.isMenuOpen = false;
  }
}
