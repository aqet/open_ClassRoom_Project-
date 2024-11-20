import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFaceSnappComponent } from './single-face-snapp.component';

describe('SingleFaceSnappComponent', () => {
  let component: SingleFaceSnappComponent;
  let fixture: ComponentFixture<SingleFaceSnappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleFaceSnappComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleFaceSnappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
