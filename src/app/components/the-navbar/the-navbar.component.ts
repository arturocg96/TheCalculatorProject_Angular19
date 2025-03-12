import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-the-navbar',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './the-navbar.component.html',
  styleUrl: './the-navbar.component.css'
})
export class TheNavbarComponent {

  isMenuOpen = false;

  constructor() {
    this.checkScreenSize(); 
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu() {
    this.isMenuOpen = false;
  }

  @HostListener('window:resize', [])
  onResize(): void {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    const screenWidth = window.innerWidth;
    if (screenWidth > 768) { 
      this.isMenuOpen = false;
    }
  }

}
