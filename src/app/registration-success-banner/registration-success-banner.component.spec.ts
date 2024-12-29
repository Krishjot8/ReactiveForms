import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationSuccessBannerComponent } from './registration-success-banner.component';

describe('RegistrationSuccessBannerComponent', () => {
  let component: RegistrationSuccessBannerComponent;
  let fixture: ComponentFixture<RegistrationSuccessBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationSuccessBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationSuccessBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
