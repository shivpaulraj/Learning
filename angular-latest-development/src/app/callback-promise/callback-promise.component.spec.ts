import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallbackPromiseComponent } from './callback-promise.component';

describe('CallbackPromiseComponent', () => {
  let component: CallbackPromiseComponent;
  let fixture: ComponentFixture<CallbackPromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallbackPromiseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallbackPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
