import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmianteComponent } from './amiante.component';

describe('AmianteComponent', () => {
  let component: AmianteComponent;
  let fixture: ComponentFixture<AmianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmianteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
