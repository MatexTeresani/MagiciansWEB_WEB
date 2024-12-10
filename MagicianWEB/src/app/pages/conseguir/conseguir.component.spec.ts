import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConseguirComponent } from './conseguir.component';

describe('ConseguirComponent', () => {
  let component: ConseguirComponent;
  let fixture: ComponentFixture<ConseguirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConseguirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConseguirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
