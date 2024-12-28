import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermiteComponent } from './termite.component';

describe('TermiteComponent', () => {
  let component: TermiteComponent;
  let fixture: ComponentFixture<TermiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
