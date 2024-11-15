import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceSnappComponent } from './face-snapp.component';

describe('FaceSnappComponent', () => {
  let component: FaceSnappComponent;
  let fixture: ComponentFixture<FaceSnappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaceSnappComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaceSnappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
