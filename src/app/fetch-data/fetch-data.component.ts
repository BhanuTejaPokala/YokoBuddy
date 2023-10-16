import { Component, ElementRef, Inject, OnInit, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css']
})
export class FetchDataComponent implements OnInit {
  isClosed = false;
  iframeActive = true; // Track whether the iframe is active
  
  ngOnInit() {
    this.iframeActive = false; // Initialize it to false during component initialization
  
    // Call a function to refresh the iframe every 20 minutes
    setInterval(this.refreshIframe, 1200000);


  }


  toggleChatbot() {
    if (!this.iframeActive) {
      this.isClosed = !this.isClosed;
      }
  }

 
  // Function to refresh the iframe
  refreshIframe() {
    const iframe = document.getElementById('chatbot-iframe') as HTMLIFrameElement;
    if (iframe) {
      iframe.src = iframe.src; // Reload the iframe by setting its src attribute to itself
    }
  }
}
