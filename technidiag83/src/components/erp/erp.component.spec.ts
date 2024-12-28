import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErntComponent } from './erp.component';

describe('ErntComponent', () => {
  let component: ErntComponent;
  let fixture: ComponentFixture<ErntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErntComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
