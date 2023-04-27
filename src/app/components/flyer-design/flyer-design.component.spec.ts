import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyerDesignComponent } from './flyer-design.component';

describe('FlyerDesignComponent', () => {
  let component: FlyerDesignComponent;
  let fixture: ComponentFixture<FlyerDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlyerDesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlyerDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
