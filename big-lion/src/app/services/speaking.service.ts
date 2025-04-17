import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SpeakingService {
  private speakingSubject = new BehaviorSubject<boolean>(false);
  readonly speaking$ = this.speakingSubject.asObservable();
  start() { this.speakingSubject.next(true); }
  stop()  { this.speakingSubject.next(false); }
}
