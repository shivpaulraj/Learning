import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarLetConstComponent } from './var-let-const.component';

describe('VarLetConstComponent', () => {
  let component: VarLetConstComponent;
  let fixture: ComponentFixture<VarLetConstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VarLetConstComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VarLetConstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
