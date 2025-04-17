import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WisdomsComponent } from './wisdoms.component';

describe('WisdomsComponent', () => {
  let component: WisdomsComponent;
  let fixture: ComponentFixture<WisdomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WisdomsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WisdomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
