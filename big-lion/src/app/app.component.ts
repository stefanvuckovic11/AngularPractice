import { Component }              from '@angular/core';
import { NavbarComponent }        from './navbar/navbar.component';
import { BigLionComponent }       from './big-lion/big-lion.component';
import { WisdomsComponent }       from './wisdoms/wisdoms.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    NavbarComponent,
    BigLionComponent,
    WisdomsComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
