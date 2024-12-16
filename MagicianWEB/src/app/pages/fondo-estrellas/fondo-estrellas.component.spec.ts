import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondoEstrellasComponent } from './fondo-estrellas.component';

describe('FondoEstrellasComponent', () => {
  let component: FondoEstrellasComponent;
  let fixture: ComponentFixture<FondoEstrellasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FondoEstrellasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FondoEstrellasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
