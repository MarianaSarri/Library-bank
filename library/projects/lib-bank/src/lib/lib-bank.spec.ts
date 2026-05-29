import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibBank } from './lib-bank';

describe('LibBank', () => {
  let component: LibBank;
  let fixture: ComponentFixture<LibBank>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibBank],
    }).compileComponents();

    fixture = TestBed.createComponent(LibBank);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
