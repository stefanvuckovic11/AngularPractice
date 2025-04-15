import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, NgSwitch, NgSwitchCase, NgSwitchDefault, NgIf, NgForOf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userText: string = '';
  counter: number = 0;
  shiftActive: boolean = false;
  items: string[] = ['Angular', 'React', 'Vue'];
  selectedOption: string = '';
  handleKeydown(event: KeyboardEvent) {
    console.log('pretisnuo si:', event.key, '| Shift status:', event.shiftKey);
    this.shiftActive = event.shiftKey;
    if (event.key === 'ArrowUp') {
      this.counter++;
    } else if (event.key === 'ArrowDown') {
      this.counter--;
    }
  }
}
