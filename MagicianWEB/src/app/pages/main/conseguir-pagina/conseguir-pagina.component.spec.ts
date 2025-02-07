import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConseguirPaginaComponent } from './conseguir-pagina.component';

describe('ConseguirPaginaComponent', () => {
  let component: ConseguirPaginaComponent;
  let fixture: ComponentFixture<ConseguirPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConseguirPaginaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConseguirPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
