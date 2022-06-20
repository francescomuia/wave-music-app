import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowArtistsBoxComponent } from './follow-artists-box.component';

describe('FollowArtistsBoxComponent', () => {
  let component: FollowArtistsBoxComponent;
  let fixture: ComponentFixture<FollowArtistsBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FollowArtistsBoxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FollowArtistsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
