import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticVenteComponent } from './diagnostic-vente.component';

describe('DiagnosticVenteComponent', () => {
  let component: DiagnosticVenteComponent;
  let fixture: ComponentFixture<DiagnosticVenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiagnosticVenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagnosticVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
