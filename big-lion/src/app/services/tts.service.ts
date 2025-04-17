import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TtsService {
  private baseUrl = 'https://api.elevenlabs.io/v1/text-to-speech';

  private voiceId = 'JBFqnCBsd6RMkjVDRZzb';
  private apiKey = 'sk_1cac0117ee84b046156ba611693a15988857a950c1914026';

  constructor(private http: HttpClient) {}


  getSpeech(text: string): Observable<Blob> {
    const url = `${this.baseUrl}/${this.voiceId}`;
    const headers = new HttpHeaders({
      'xi-api-key': this.apiKey,
      'Content-Type': 'application/json'
    });
    const body = {
      text,
      model_id: 'eleven_monolingual_v1',
      voice_settings: {
        stability: 0.5,
        similarity_boost: 0.75
      }
    };

    return this.http.post(url, body, {
      headers,
      responseType: 'blob'
    });
  }
}
