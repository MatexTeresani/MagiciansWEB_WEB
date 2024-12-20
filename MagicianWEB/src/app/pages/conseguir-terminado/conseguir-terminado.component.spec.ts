import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConseguirTerminadoComponent } from './conseguir-terminado.component';

describe('ConseguirTerminadoComponent', () => {
  let component: ConseguirTerminadoComponent;
  let fixture: ComponentFixture<ConseguirTerminadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConseguirTerminadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConseguirTerminadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
