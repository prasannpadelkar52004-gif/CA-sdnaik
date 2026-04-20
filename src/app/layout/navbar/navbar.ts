import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {

  services = [
    { name: 'Tax Preparation', icon: 'bi bi-receipt-cutoff text-primary', link: '/tax-preparation' },
    { name: 'Accounting & Bookkeeping', icon: 'bi bi-journal-bookmark text-primary', link: '/accounting-bookkeeping' },
    { name: 'Assistance in Audit', icon: 'bi bi-shield-check text-primary', link: '/audit' },
    { name: 'Financial Analysis', icon: 'bi bi-graph-up-arrow text-primary', link: '/financial-analysis' },
    { name: 'Payroll Processing', icon: 'bi bi-calendar-week text-primary', link: '/payroll' },
    { name: 'Accounts Finalisation', icon: 'bi bi-pencil-square text-primary', link: '/finalisation' },
    { name: 'MIS & Reporting', icon: 'bi bi-bar-chart-line text-primary', link: '/mis-reporting' },
    { name: 'Financial Statements', icon: 'bi bi-journal-check text-primary', link: '/financial-statements' }
  ];

  // ✅ ADD THIS
  closeNavbar(navbar: any) {
    if (window.innerWidth < 992) {
      navbar.classList.remove('show');
    }
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  }
}