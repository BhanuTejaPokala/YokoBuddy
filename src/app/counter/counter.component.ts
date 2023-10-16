import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  constructor(private renderer: Renderer2, private el: ElementRef) { }
  ngOnInit() {
         // Get a reference to the animation container element by its ID
         const animationContainer = this.el.nativeElement.querySelector('#animation-container');

     
         // Function to hide the animation container
         const hideAnimationContainer = () => {
           this.renderer.setStyle(animationContainer, 'display', 'none');
         };
     
          // Set a timeout to hide the animation container after 10 seconds (10000 milliseconds)
          setTimeout(hideAnimationContainer, 10000);
}
}
