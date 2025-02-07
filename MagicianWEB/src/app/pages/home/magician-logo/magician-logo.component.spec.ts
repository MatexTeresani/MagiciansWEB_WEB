import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicianLogoComponent } from './magician-logo.component';

describe('MagicianLogoComponent', () => {
  let component: MagicianLogoComponent;
  let fixture: ComponentFixture<MagicianLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagicianLogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagicianLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
