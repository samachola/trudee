import { Directive, ElementRef, OnInit } from '@angular/core';


@Directive({
  selector: '[appGooglePlaces]'
})
export class GooglePlacesDirective implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
  }

}
