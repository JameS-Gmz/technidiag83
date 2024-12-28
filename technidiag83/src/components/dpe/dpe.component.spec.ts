import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DPEComponent } from './dpe.component';

describe('DPEComponent', () => {
  let component: DPEComponent;
  let fixture: ComponentFixture<DPEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DPEComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DPEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
