import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectfirebaseangularComponent } from './proyectfirebaseangular.component';

describe('ProyectfirebaseangularComponent', () => {
  let component: ProyectfirebaseangularComponent;
  let fixture: ComponentFixture<ProyectfirebaseangularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectfirebaseangularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectfirebaseangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
