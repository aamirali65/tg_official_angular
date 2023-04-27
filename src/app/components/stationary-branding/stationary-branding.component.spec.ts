import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationaryBrandingComponent } from './stationary-branding.component';

describe('StationaryBrandingComponent', () => {
  let component: StationaryBrandingComponent;
  let fixture: ComponentFixture<StationaryBrandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StationaryBrandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StationaryBrandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
