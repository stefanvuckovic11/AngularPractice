import { Component, HostListener } from '@angular/core';
import { NgForOf, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    FormsModule,
    NgForOf,
    NgIf,
    NavbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userText: string = '';
  counter: number = 0;
  shiftActive: boolean = false;
  items: string[] = ['Angular', 'React', 'Vue'];
  selectedOption: string = '';

  @HostListener('window:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    console.log('pretisnuo si:', event.key, '| Shift status:', event.shiftKey);
    this.shiftActive = event.shiftKey;
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.counter++;
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.counter--;
    }
  }
}
