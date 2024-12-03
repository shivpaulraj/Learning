import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursiveFunctionComponent } from './recursive-function.component';

describe('RecursiveFunctionComponent', () => {
  let component: RecursiveFunctionComponent;
  let fixture: ComponentFixture<RecursiveFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecursiveFunctionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecursiveFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
