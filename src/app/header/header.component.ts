import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isMenuOpen = false;
  isDropdownOpen: { [key: string]: boolean } = {};

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleDropdown(dropdown: string) {
    // Close all dropdowns except the current one
    Object.keys(this.isDropdownOpen).forEach((key) => {
      if (key !== dropdown) {
        this.isDropdownOpen[key] = false;
      }
    });

    // Toggle the current dropdown
    this.isDropdownOpen[dropdown] = !this.isDropdownOpen[dropdown];
  }

  closeDropdowns() {
    // Close all dropdowns
    this.isDropdownOpen = {};
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;

    // Check if the clicked element is inside the navigation
    if (!target.closest('nav')) {
      this.closeDropdowns();
    }
  }
}
