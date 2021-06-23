import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryspecComponent } from './countryspec.component';

describe('CountryspecComponent', () => {
  let component: CountryspecComponent;
  let fixture: ComponentFixture<CountryspecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryspecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryspecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
