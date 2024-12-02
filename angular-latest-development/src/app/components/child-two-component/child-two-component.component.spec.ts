import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTwoComponentComponent } from './child-two-component.component';

describe('ChildTwoComponentComponent', () => {
  let component: ChildTwoComponentComponent;
  let fixture: ComponentFixture<ChildTwoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildTwoComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildTwoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
