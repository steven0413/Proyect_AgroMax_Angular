import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoIndexComponent } from './contenido-index.component';

describe('ContenidoIndexComponent', () => {
  let component: ContenidoIndexComponent;
  let fixture: ComponentFixture<ContenidoIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
