import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
 
  })

export class NavbarComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
  }
  imageUrl="/assets/image/download.png";


  toggleNavbar=true;
 
  toggleNavbar1(){
    this.toggleNavbar=!this.toggleNavbar;

    
    }
  // ToggleNavBar () {
  //   let element: HTMLElement = document.getElementsByClassName( 'navbar-toggler' )[ 0 ] as HTMLElement;
  //   if ( element.getAttribute( 'aria-expanded' ) == 'true' ) {
  //       element
  //   }
  // }
}
  
  


