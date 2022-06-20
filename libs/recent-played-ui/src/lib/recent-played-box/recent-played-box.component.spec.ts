import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentPlayedBoxComponent } from './recent-played-box.component';

describe('RecentPlayedBoxComponent', () => {
  let component: RecentPlayedBoxComponent;
  let fixture: ComponentFixture<RecentPlayedBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecentPlayedBoxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RecentPlayedBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
