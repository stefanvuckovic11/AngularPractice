import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  imports: [
    RouterLink,
    NgOptimizedImage
  ],
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {}
