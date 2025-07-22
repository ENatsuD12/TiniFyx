import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformBusiness } from './transform-business';

describe('TransformBusiness', () => {
  let component: TransformBusiness;
  let fixture: ComponentFixture<TransformBusiness>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransformBusiness]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransformBusiness);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
