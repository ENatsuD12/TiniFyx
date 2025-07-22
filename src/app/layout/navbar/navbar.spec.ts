import { ComponentFixture, TestBed } from '@angular/core/testing';

import { navbarcomponent } from './navbar';

describe('Navbar', () => {
  let component: navbarcomponent;
  let fixture: ComponentFixture<navbarcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [navbarcomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(navbarcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
