import { Component, OnDestroy } from '@angular/core';
import { NgOptimizedImage }     from '@angular/common';
import { SpeakingService }      from '../services/speaking.service';
import { Subscription }         from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-big-lion',
  imports: [NgOptimizedImage],
  templateUrl: './big-lion.component.html',
  styleUrls: ['./big-lion.component.scss']
})
export class BigLionComponent implements OnDestroy {
  closedMouth = 'big-lion.png';
  openMouth   = 'big-lion2.png';
  currentImage = this.closedMouth;

  private intervalId: any = null;
  private sub: Subscription;

  constructor(private speaking: SpeakingService) {
    this.sub = this.speaking.speaking$.subscribe(isSpeaking => {
      if (isSpeaking) {
        if (!this.intervalId) {
          this.intervalId = setInterval(() => {
            this.currentImage =
              this.currentImage === this.closedMouth
                ? this.openMouth
                : this.closedMouth;
          }, 200);
        }
      } else {
        clearInterval(this.intervalId);
        this.intervalId = null;
        this.currentImage = this.closedMouth;
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
