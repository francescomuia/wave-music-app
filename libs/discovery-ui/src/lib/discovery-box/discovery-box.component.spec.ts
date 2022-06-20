import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoveryBoxComponent } from './discovery-box.component';

describe('DiscoveryBoxComponent', () => {
  let component: DiscoveryBoxComponent;
  let fixture: ComponentFixture<DiscoveryBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoveryBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoveryBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
