import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

interface QuoteResponse {
  quote: string;
  author: string;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class WisdomsService {
  private apiUrl = 'https://api.api-ninjas.com/v1/quotes';
  private apiKey = 'oWtnC4S8XxR+NlabSqpBsw==xCedqvs0BoJBU8uc';

  constructor(private http: HttpClient) {}
  getWisdom(_category: string): Observable<string> {
    const headers = new HttpHeaders().set('X-Api-Key', this.apiKey);

    return this.http
        .get<QuoteResponse[]>(this.apiUrl, { headers })
        .pipe(
            map(arr =>
                arr.length
                    ? `“${arr[0].quote}” — ${arr[0].author}`
                    : 'No wisdom available at the moment.'
            )
        );
  }
}
