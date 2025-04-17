import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-big-lion',
  imports: [
    NgOptimizedImage,
    NgOptimizedImage,
    NgOptimizedImage
  ],
  templateUrl: './big-lion.component.html',
  styleUrl: './big-lion.component.scss'
})
export class BigLionComponent {

}
