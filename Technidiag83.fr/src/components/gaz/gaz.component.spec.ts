import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GazComponent } from './gaz.component';

describe('GazComponent', () => {
  let component: GazComponent;
  let fixture: ComponentFixture<GazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GazComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
