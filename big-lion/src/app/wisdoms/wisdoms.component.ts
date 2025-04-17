import { Component }        from '@angular/core';
import { CommonModule }     from '@angular/common';
import { FormsModule }      from '@angular/forms';
import { WisdomsService }   from './wisdoms.service';

@Component({
  standalone: true,
  selector: 'app-wisdoms',
  imports: [CommonModule, FormsModule],
  templateUrl: './wisdoms.component.html',
  styleUrls: ['./wisdoms.component.scss']
})
export class WisdomsComponent {
  categories = [
    'age','alone','amazing','anger','architecture','art','attitude','beauty','best','birthday',
    'business','car','change','communication','computers','cool','courage','dad','dating','death',
    'design','dreams','education','environmental','equality','experience','failure','faith',
    'family','famous','fear','fitness','food','forgiveness','freedom','friendship','funny','future',
    'god','good','government','graduation','great','happiness','health','history','home','hope',
    'humor','imagination','inspirational','intelligence','jealousy','knowledge','leadership',
    'learning','legal','life','love','marriage','medical','men','mom','money','morning','movies',
    'success'
  ];

  category = this.categories[0];
  wisdomText = '';
  loading = false;

  constructor(private svc: WisdomsService) {}

  generateWisdom() {
    this.loading = true;
    this.wisdomText = '';
    this.svc.getWisdom(this.category).subscribe({
      next: txt => { this.wisdomText = txt; this.loading = false; },
      error: _ => { this.wisdomText = 'Error fetching wisdom.'; this.loading = false; }
    });
  }
}
