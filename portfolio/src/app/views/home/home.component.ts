import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('carouselList', { static: true }) carouselList!: ElementRef;

  //Projects
  currentIndex = 0;
  totalItems = 4;

  name: string = '';
  phone: string = '';
  message: string = '';

  constructor() { }

  ngOnInit(): void {
  


    const elemToggleFunc = function (elem: any) { elem.classList.toggle("active"); }



    /**
     * header sticky & go to top
     */

    const header: any = document.querySelector("[data-header]");
    const goTopBtn: any = document.querySelector("[data-go-top]");

    window.addEventListener("scroll", function () {
    
      if (window.scrollY >= 10) {
        header.classList.add("active");
        goTopBtn.classList.add("active");
      } else {
        header.classList.remove("active");
        goTopBtn.classList.remove("active");
      }
    
    });



    /**
     * navbar toggle
     */

    const navToggleBtn: any = document.querySelector("[data-nav-toggle-btn]");
    const navbar = document.querySelector("[data-navbar]");

    navToggleBtn.addEventListener("click", function () {
    
      elemToggleFunc(navToggleBtn);
      elemToggleFunc(navbar);
      elemToggleFunc(document.body);
    
    });



    /**
     * skills toggle
     */

    const toggleBtnBox: any = document.querySelector("[data-toggle-box]");
    const toggleBtns: any = document.querySelectorAll("[data-toggle-btn]");
    const skillsBox: any = document.querySelector("[data-skills-box]");

    for (let i = 0; i < toggleBtns.length; i++) {
      toggleBtns[i].addEventListener("click", function () {
      
        elemToggleFunc(toggleBtnBox);
        for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
        elemToggleFunc(skillsBox);
      
      });
    }



    /**
     * dark & light theme toggle
     */

    const themeToggleBtn: any = document.querySelector("[data-theme-btn]");

    themeToggleBtn.addEventListener("click", function () {
    
      elemToggleFunc(themeToggleBtn);
    
      if (themeToggleBtn.classList.contains("active")) {
        document.body.classList.remove("dark_theme");
        document.body.classList.add("light_theme");
      
        localStorage.setItem("theme", "light_theme");
      } else {
        document.body.classList.add("dark_theme");
        document.body.classList.remove("light_theme");
      
        localStorage.setItem("theme", "dark_theme");
      }
    
    });

    /**
     * check & apply last time selected theme from localStorage
     */

    if (localStorage.getItem("theme") === "light_theme") {
      themeToggleBtn.classList.add("active");
      document.body.classList.remove("dark_theme");
      document.body.classList.add("light_theme");
    } else {
      themeToggleBtn.classList.remove("active");
      document.body.classList.remove("light_theme");
      document.body.classList.add("dark_theme");
    }
  }

  sendEmail() {
    const mailtoLink = `mailto:gabriel.alves.gas@hotmail.com?subject=Contato&body=${this.message}%0A%0A${this.name} - ${this.phone}`;
    window.location.href = mailtoLink;
  }

  prevSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.totalItems - 1;
    }
    this.updateCarousel();
  }

  nextSlide(): void {
    if (this.currentIndex < this.totalItems - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.updateCarousel();
  }

  updateCarousel(): void {
    const offset = -this.currentIndex * 100; 
    this.carouselList.nativeElement.style.transform = `translateX(${offset}%)`;
  }
}
