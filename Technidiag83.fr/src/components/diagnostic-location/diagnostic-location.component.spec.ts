import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticLocationComponent } from './diagnostic-location.component';

describe('DiagnosticLocationComponent', () => {
  let component: DiagnosticLocationComponent;
  let fixture: ComponentFixture<DiagnosticLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiagnosticLocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagnosticLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
