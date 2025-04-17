import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigLionComponent } from './big-lion.component';

describe('BigLionComponent', () => {
  let component: BigLionComponent;
  let fixture: ComponentFixture<BigLionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigLionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigLionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
