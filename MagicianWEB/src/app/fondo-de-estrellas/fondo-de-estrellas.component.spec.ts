import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondoDeEstrellasComponent } from './fondo-de-estrellas.component';

describe('FondoDeEstrellasComponent', () => {
  let component: FondoDeEstrellasComponent;
  let fixture: ComponentFixture<FondoDeEstrellasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FondoDeEstrellasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FondoDeEstrellasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
