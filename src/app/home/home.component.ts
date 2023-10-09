import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private currentIndex = 0;
  private readonly interval = 8000; // 2 seconds
  chatbotIframeSrc='https://web.powerva.microsoft.com/environments/Default-0da2a83b-13d9-4a35-965f-ec53a220ed9d/bots/cr09e_yBot/webchat?__version__=2';
  constructor() { }
  
  ngOnInit(): void {
    setInterval(() => {
      this.nextSlide();
    }, this.interval);
  }

  nextSlide() {
    const slider = document.getElementById('image-slider');
    if (!slider) {
      return;
    }

    this.currentIndex = (this.currentIndex + 1) % slider.children.length;
    const translateX = -this.currentIndex * 100; // 100% for each slide
    slider.style.transform = `translateX(${translateX}%)`;
  }
  isClosed = true;

  toggleChatbot() {
    this.isClosed = !this.isClosed;
  }
}