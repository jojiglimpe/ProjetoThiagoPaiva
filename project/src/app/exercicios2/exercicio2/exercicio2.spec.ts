import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exericio2 } from './exericio2';

describe('Exericio2', () => {
  let component: Exericio2;
  let fixture: ComponentFixture<Exericio2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exericio2],
    }).compileComponents();

    fixture = TestBed.createComponent(Exericio2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
