import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheAsideComponent } from './the-aside.component';

describe('TheAsideComponent', () => {
  let component: TheAsideComponent;
  let fixture: ComponentFixture<TheAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheAsideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
